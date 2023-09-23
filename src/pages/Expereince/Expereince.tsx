import { FC } from 'react';
import {
  BACKGROUND,
  Background,
  Blur,
  EXPEREINCE,
  SOCIAL,
  Section,
} from '../../features';
import { ExpereinceList } from '../../components/ExpereinceList/ExpereinceList';
import { SocialList } from '../../components/SocialList/SocialList';

export const Expereince: FC = () => {
  return (
    <Section>
      <ExpereinceList list={EXPEREINCE} />
      <SocialList list={SOCIAL} />
      <Background background={BACKGROUND} />
      <Blur />
    </Section>
  );
};
