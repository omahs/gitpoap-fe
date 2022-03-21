import React, { useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Modal, Center } from '@mantine/core';
import { BackgroundPanel, BackgroundPanel2, TextLight } from '../../colors';
import { Button } from '../shared/elements/Button';
import { Input as InputUI, TextInputLabelStyles } from '../shared/elements/Input';
import { TextArea as TextAreaUI } from '../shared/elements/TextArea';
import { Text } from '../shared/elements/Text';
import { MidnightBlue } from '../../colors';
import { useAuthContext } from '../github/AuthContext';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  hasTwitterIntegration: boolean;
};

const StyledModal = styled(Modal)`
  .mantine-Modal-modal {
    background-color: ${BackgroundPanel};
  }
`;

const Content = styled(Center)`
  flex-direction: column;
  padding: ${rem(30)} ${rem(70)};
`;

const Header = styled.div`
  font-family: VT323;
  font-size: ${rem(48)};
  text-align: center;
  color: ${TextLight};
`;

const FieldLabel = styled.div`
  ${TextInputLabelStyles};
`;

const ProfileFields = styled.div`
  background-color: ${MidnightBlue};
  padding: ${rem(30)} ${rem(70)};
  border: ${rem(1)} solid ${BackgroundPanel2};
  border-radius: ${rem(10)};
  margin-bottom: ${rem(30)};
`;

const Setting = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${rem(35)};
  justify-content: space-between;
`;

const ConnectTwitter = styled.div``;

const ConnectGitHub = styled.div``;

const PersonalWebsite = styled.div`
  display: flex;
  margin-bottom: ${rem(30)};
`;

const ProfileBio = styled.div`
  display: flex;
`;

const Input = styled(InputUI)`
  flex: 1;
`;

const TextArea = styled(TextAreaUI)`
  flex: 1;
`;

export const EditProfileModal = ({ isOpen, onClose, hasTwitterIntegration }: Props) => {
  const { authState, handleLogout, authorizeGitHub } = useAuthContext();
  const [websiteValue, setWebsiteValue] = useState<string>('');
  const [bioValue, setBioValue] = useState<string>('');

  return (
    <StyledModal
      onClose={onClose}
      opened={isOpen}
      centered
      size="xl"
      closeButtonLabel="Close GitPOAP claim modal"
    >
      <Content>
        <Header style={{ marginBottom: rem(30) }}>{'Edit profile'}</Header>
        <ProfileFields>
          {hasTwitterIntegration && (
            <ConnectTwitter>
              <FieldLabel>{'Twitter'}</FieldLabel>
              <Setting>
                <Text style={{ paddingRight: rem(30) }}>
                  {'Connect your Twitter account to display it on your profile'}
                </Text>
                <Button onClick={authorizeGitHub} variant="outline">
                  {'Connect'}
                </Button>
              </Setting>
            </ConnectTwitter>
          )}
          <ConnectGitHub>
            <FieldLabel>{'GitHub'}</FieldLabel>
            {authState.isLoggedIntoGitHub ? (
              <Setting>
                <Text>{`You're connected as @${authState.user?.githubHandle}`}</Text>
                <Button onClick={handleLogout} variant="outline">
                  {'Disconnect'}
                </Button>
              </Setting>
            ) : (
              <Setting>
                <Text>{'Connect your GitHub account to claim GitPOAPs'}</Text>
                <Button onClick={authorizeGitHub} variant="outline">
                  {'Connect'}
                </Button>
              </Setting>
            )}
          </ConnectGitHub>
          <PersonalWebsite>
            <Input
              placeholder="https://gitpoap.io"
              label={'Website Url'}
              value={websiteValue}
              onChange={(e) => setWebsiteValue(e.target.value)}
            />
          </PersonalWebsite>
          <ProfileBio>
            <TextArea
              placeholder="web3 developer, aspiring dao contributor"
              label={'Profile Bio'}
              value={bioValue}
              onChange={(e) => setBioValue(e.target.value)}
            />
          </ProfileBio>
        </ProfileFields>

        <Button
          onClick={() => {
            console.log('saving profile');
          }}
        >
          {'Save'}
        </Button>
      </Content>
    </StyledModal>
  );
};
