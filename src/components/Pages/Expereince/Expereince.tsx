import { FC } from 'react';

import { Social } from '../../Social/Social';
import { Background } from '../../UI/Background/Background';
import { Blur } from '../../UI/Blur/Blur';
import { Section } from '../../UI/Section/Section';

import { BACKGROUND } from '../../../constants/constants';
import { ExpereinceList } from '../../ExpereinceList/ExpereinceList';

export const Expereince: FC = () => {
  return (
    <Section>
      <ExpereinceList />
      <Social />
      <Background background={BACKGROUND} />
      <Blur />
    </Section>
  );
};
