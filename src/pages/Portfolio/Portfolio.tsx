import { FC } from 'react';
import { Section } from '../../components/UI/Section/Section';
import { Social } from '../../components/Social/Social';
import { Background } from '../../components/UI/Background/Background';
import { BACKGROUND } from '../../constants/constants';
import { Slider } from '../../components/UI/Slider/Slider';

export const Portfolio:FC = () => {
  return (
    <>
        <Section>
      <Slider />
      <Social />
      <Background background={BACKGROUND} />
    </Section>
    </>
  );
};
