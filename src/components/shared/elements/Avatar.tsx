import styled from 'styled-components';
import { rem } from 'polished';
import ImageUI from 'next/image';

type Props = {
  quality?: number;
  className?: string;
  src: string;
  useDefaultImage?: boolean;
};

const AvatarWrapper = styled.div`
  height: ${rem(80)};
  width: ${rem(80)};
  position: relative;
`;

const Image = styled(ImageUI)`
  border-radius: 50%;
`;

const DefaultImage = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

export const Avatar = ({ quality = 100, className, src, useDefaultImage }: Props) => {
  return (
    <AvatarWrapper className={className}>
      {useDefaultImage ? (
        <DefaultImage src={src} alt="" />
      ) : (
        <Image src={src} layout="fill" quality={quality} alt="" />
      )}
    </AvatarWrapper>
  );
};
