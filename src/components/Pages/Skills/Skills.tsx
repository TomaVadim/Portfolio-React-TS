import { FC } from 'react';

import { SkillsList } from '../../SkillsList/SkillsList';
import { Social } from '../../Social/Social';
import { Background } from '../../UI/Background/Background';
import { Blur } from '../../UI/Blur/Blur';
import { Section } from '../../UI/Section/Section';

import { BACKGROUND } from '../../../constants/constants';

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
