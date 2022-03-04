import styled from 'styled-components';
import { rem } from 'polished';
import ImageUI from 'next/image';

type Props = {
  quality?: number;
  className?: string;
  src: string;
};

const AvatarWrapper = styled.div`
  max-height: ${rem(80)};
  max-width: ${rem(80)};
  position: relative;
`;

const Image = styled(ImageUI)`
  border-radius: 50%;
`;

export const Avatar = ({ quality = 100, className, src }: Props) => {
  return (
    <AvatarWrapper className={className}>
      <Image src={src} layout="fill" quality={quality} alt="" />;
    </AvatarWrapper>
  );
};
