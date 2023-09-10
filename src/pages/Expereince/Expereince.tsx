import { FC } from 'react';

import { Social } from '../../components/Social/Social';
import { Background } from '../../components/UI/Background/Background';
import { Blur } from '../../components/UI/Blur/Blur';
import { Section } from '../../components/UI/Section/Section';

import { BACKGROUND } from '../../constants/constants';
import { ExpereinceList } from '../../components/ExpereinceList/ExpereinceList';

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
