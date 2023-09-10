import { FC } from 'react';

import { SkillsList } from '../../components/SkillsList/SkillsList';
import { Social } from '../../components/Social/Social';
import { Background } from '../../components/UI/Background/Background';
import { Blur } from '../../components/UI/Blur/Blur';
import { Section } from '../../components/UI/Section/Section';

import { BACKGROUND } from '../../constants/constants';

export const Skills: FC = () => {
  return (
    <Section>
      <SkillsList />
      <Social />
      <Background background={BACKGROUND} />
      <Blur />
    </Section>
  );
};
