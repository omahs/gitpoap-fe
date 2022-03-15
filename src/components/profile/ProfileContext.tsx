import { useRouter } from 'next/router';
import React, { createContext, useState, useContext } from 'react';

type ProfileState = {
  hasLoadedLocalStorage: boolean;
};

type ProfileContext = {
  profileState: ProfileState;
  setProfileState: (profileState: ProfileState) => void;
};

export const getInitialState = (): ProfileState => ({
  hasLoadedLocalStorage: false,
});

const ProfileContext = createContext<ProfileContext>({
  profileState: getInitialState(),
  setProfileState: (_: ProfileState) => {},
});

export const useProfileContext = () => {
  return useContext(ProfileContext);
};

type Props = {
  children: React.ReactNode;
};

export const GHAuthProvider = ({ children }: Props) => {
  const [profileState, setProfileState] = useState<ProfileState>(getInitialState());
  const router = useRouter();

  return (
    <ProfileContext.Provider value={{ profileState, setProfileState }}>
      {children}
    </ProfileContext.Provider>
  );
};
