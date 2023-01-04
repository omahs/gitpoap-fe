import { Button, FileButton, Grid, Group, Stack } from '@mantine/core';
import { rem } from 'polished';
import { useEffect, useState } from 'react';
import { useTeamDataQuery, useUpdateTeamMutation } from '../../../graphql/generated-gql';
import { useApi } from '../../../hooks/useApi';
import { Notifications } from '../../../notifications';
import { Header, Input, Text, TextArea } from '../../shared/elements';
import { TeamLogo } from './TeamLogo';

type Props = {
  teamId: number;
};

export const TeamSettings = ({ teamId }: Props) => {
  const api = useApi();

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [logoImageUrl, setLogoImageUrl] = useState<string | null>(null);

  const [result] = useTeamDataQuery({ variables: { teamId } });
  const team = result.data?.team;

  const [updateResult, updateTeam] = useUpdateTeamMutation();
  const updateResultData = updateResult.data?.updateTeam;

  useEffect(() => {
    setName(team?.name || '');
    setDescription(team?.description || '');
    setLogoImageUrl(team?.logoImageUrl || null);
  }, [team]);

  useEffect(() => {
    if (updateResultData) {
      setName(updateResultData?.name || '');
      setDescription(updateResultData?.description || '');
    }
  }, [updateResultData]);

  const hasChanges = name !== team?.name || description !== team?.description;

  const onSave = async () => {
    const data = await updateTeam({
      teamId,
      input: { name: { set: name }, description: { set: description } },
    });

    if (data === null) {
      Notifications.error('Oops, something went wrong!');
      return;
    }
  };

  const onLogoUpload = async (file: File) => {
    const data = await api.team.addLogo(teamId, file);

    if (data === null) {
      Notifications.error('Oops, something went wrong!');
      return;
    }

    setLogoImageUrl(URL.createObjectURL(file));
  };

  return (
    <Stack pl={rem(32)} sx={{ width: '100%', maxWidth: rem(1000) }}>
      <Header>{'Settings'}</Header>
      <Grid>
        <Grid.Col span="auto">
          <Stack spacing={32} sx={{ maxWidth: rem(600), minWidth: rem(300) }}>
            <Input
              placeholder="Name"
              label={<Text>{'Name'}</Text>}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextArea
              placeholder="Description"
              label={<Text>{'Description'}</Text>}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button disabled={!hasChanges} onClick={onSave}>
              {'Save'}
            </Button>
          </Stack>
        </Grid.Col>
        <Grid.Col span="content">
          <Stack>
            <Text>{'Team Logo'}</Text>
            <TeamLogo name={name} size={250} imageUrl={logoImageUrl ?? undefined} />
            <Group sx={{ width: '100%' }}>
              <FileButton onChange={onLogoUpload} accept="image/png,image/jpeg">
                {(props) => (
                  <Button {...props} variant="outline">
                    {'Replace'}
                  </Button>
                )}
              </FileButton>
            </Group>
          </Stack>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};
