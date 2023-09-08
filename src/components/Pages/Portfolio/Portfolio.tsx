import { FC } from 'react';
import { Section } from '../../UI/Section/Section';
import { Social } from '../../Social/Social';
import { Background } from '../../UI/Background/Background';
import { BACKGROUND } from '../../../constants/constants';
import { Slider } from '../../UI/Slider/Slider';

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
