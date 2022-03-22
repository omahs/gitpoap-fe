import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react';
import { useQuery, gql } from 'urql';
import { useWeb3Context } from '../../components/wallet/Web3ContextProvider';
import { AvatarResolver } from '@ensdomains/ens-avatar';
import { EditProfileModal } from '../../components/profile/EditProfileModal';
import { GITPOAP_API_URL } from '../../constants';
import { useAuthContext } from '../github/AuthContext';

const ProfileQuery = gql`
  query profile($address: String!) {
    profileData(address: $address) {
      id
      bio
      name
      twitterHandle
      personalSiteUrl
    }
  }
`;

export type ProfileData = {
  id: string;
  bio: string;
  name: string;
  twitterHandle?: string;
  personalSiteUrl?: string;
};

export type UserPOAPsQueryRes = {
  profileData: ProfileData | null;
};

type ProfileContext = {
  profileData?: UserPOAPsQueryRes['profileData'];
  setProfileData: Dispatch<SetStateAction<UserPOAPsQueryRes['profileData'] | undefined>>;
  setIsUpdateModalOpen: Dispatch<SetStateAction<boolean>>;
  avatarURI?: string;
  showEditProfileButton: boolean;
};

const ProfileContext = createContext<ProfileContext>({} as ProfileContext);

export const useProfileContext = () => {
  return useContext(ProfileContext);
};

type Props = {
  children: React.ReactNode;
  address: string;
  ensName?: string;
};

export const ProfileProvider = ({ children, address, ensName }: Props) => {
  const { tokens } = useAuthContext();
  const { web3Provider, address: connectedWalletAddress } = useWeb3Context();
  const signer = web3Provider?.getSigner();
  const [profileData, setProfileData] = useState<UserPOAPsQueryRes['profileData']>();
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [isSaveLoading, setIsSaveLoading] = useState<boolean>(false);
  const [avatarURI, setAvatarURI] = useState<string>();
  const [result, refetch] = useQuery<UserPOAPsQueryRes>({
    query: ProfileQuery,
    variables: {
      address,
    },
  });

  const showEditProfileButton =
    address.toLocaleLowerCase() === connectedWalletAddress?.toLocaleLowerCase();

  /* Hook to set profile data to state */
  useEffect(() => {
    setProfileData(result.data?.profileData);
  }, [result.data]);

  useEffect(() => {
    const getAvatar = async () => {
      if (web3Provider && ensName) {
        const avt = new AvatarResolver(web3Provider);
        const resolvedAvatarURI = await avt.getAvatar(ensName, {});

        if (resolvedAvatarURI) {
          setAvatarURI(resolvedAvatarURI);
        }
      }
    };

    getAvatar();
  }, [ensName, web3Provider]);

  const updateProfile = useCallback(
    async (
      newProfileData: Partial<Pick<ProfileData, 'bio' | 'personalSiteUrl' | 'twitterHandle'>>,
    ) => {
      setIsSaveLoading(true);
      const data = {
        bio: newProfileData.bio,
        personalSiteUrl: newProfileData.personalSiteUrl,
        twitterHandle: newProfileData.twitterHandle,
      };
      const signature = await signer?.signMessage(JSON.stringify(data));

      try {
        const res = await fetch(`${GITPOAP_API_URL}/profiles`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${tokens?.accessToken}`,
          },
          body: JSON.stringify({
            address: connectedWalletAddress,
            data,
            signature,
          }),
        });

        if (res.status === 200) {
          refetch({ requestPolicy: 'network-only' });
        }
        setIsSaveLoading(false);
      } catch (err) {
        console.warn(err);
        setIsSaveLoading(false);
      }
    },
    [signer, tokens?.accessToken, refetch, connectedWalletAddress],
  );

  return (
    <ProfileContext.Provider
      value={{
        profileData,
        setProfileData,
        avatarURI,
        showEditProfileButton,
        setIsUpdateModalOpen,
      }}
    >
      {children}
      {result.data && (
        <EditProfileModal
          bio={profileData?.bio}
          personalSiteUrl={profileData?.personalSiteUrl}
          twitterHandle={profileData?.twitterHandle}
          isOpen={isUpdateModalOpen}
          onClose={() => setIsUpdateModalOpen(false)}
          onClickSave={updateProfile}
          isSaveLoading={isSaveLoading}
        />
      )}
    </ProfileContext.Provider>
  );
};
