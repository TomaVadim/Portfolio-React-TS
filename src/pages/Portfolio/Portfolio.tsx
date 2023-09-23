import { FC } from 'react';
import {
  BACKGROUND,
  Background,
  SOCIAL,
  Section,
  Slider,
} from '../../features';
import { SocialList } from '../../components/SocialList/SocialList';

export const Portfolio: FC = () => {
  return (
    <>
      <Section>
        <Slider />
        <SocialList list={SOCIAL} />
        <Background background={BACKGROUND} />
      </Section>
    </>
  );
};
