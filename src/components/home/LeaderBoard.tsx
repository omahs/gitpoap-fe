import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { useQuery } from 'urql';
import { Header } from '../shared/elements/Header';
import { BackgroundPanel2, TextAccent } from '../../colors';
import { Avatar } from '../shared/elements/Avatar';
import { IconCount } from '../shared/elements/IconCount';
import { GitPOAP } from '../shared/elements/icons/GitPOAP';
import { Divider as DividerUI } from '@mantine/core';

type LeaderBoardItemProps = {
  imgSrc: string;
  name: string;
  count: number;
};

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-family: VT323;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(22)};
  letter-spacing: ${rem(0.5)};
  color: ${TextAccent};
`;

const AvatarStyled = styled(Avatar)`
  height: ${rem(40)};
  width: ${rem(40)};
  margin-right: ${rem(14)};
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${rem(16)} ${rem(20)};
`;

const HeaderStyled = styled(Header)`
  font-size: ${rem(30)};
  line-height: ${rem(48)};
`;

const UserInfo = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
`;

const Divider = styled(DividerUI)`
  border-top-color: ${BackgroundPanel2};

  &:last-child {
    display: none;
  }
`;

const List = styled.div`
  margin-top: ${rem(30)};
`;

const LeadersQuery = `
query leaders {
  users (orderBy: { count: desc }, first: 5) {
    imgSrc
    name
    count
  }
}
`;

const LeaderBoardItem = ({ name, imgSrc, count }: LeaderBoardItemProps) => {
  return (
    <>
      <Item>
        <UserInfo>
          <AvatarStyled src={imgSrc} />
          <Name>{name}</Name>
        </UserInfo>
        <IconCount icon={<GitPOAP />} count={count} />
      </Item>
      <Divider />
    </>
  );
};

export const LeaderBoard = () => {
  const [result] = useQuery<{
    leaders: {
      users: LeaderBoardItemProps[];
    };
  }>({
    query: LeadersQuery,
  });

  return (
    <Wrapper>
      <HeaderStyled>{'Most honored contributors last week'}</HeaderStyled>
      <List>
        {result.data?.leaders.users.map((item: LeaderBoardItemProps) => (
          <LeaderBoardItem key={item.name} {...item} />
        ))}
      </List>
    </Wrapper>
  );
};
