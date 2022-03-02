import styled from 'styled-components';
import Image from 'next/image';

export const Avatar = styled(Image).attrs((props) => ({
  width: props.width ?? 80,
  height: props.height ?? 80,
  quality: 100,
}))`
  border-radius: 50%;
`;
