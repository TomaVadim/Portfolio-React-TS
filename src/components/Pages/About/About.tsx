import { FC } from 'react';

import { Social } from '../../Social/Social';
import { Background } from '../../UI/Background/Background';
import { Section } from '../../UI/Section/Section';

import { BACKGROUND } from '../../../constants/constants';
import { InfoAboutMe } from '../../InfoAboutMe/InfoAboutMe';
import { Avatar } from '../../UI/Avatar/Avatar';
import { Blur } from '../../UI/Blur/Blur';


export const About: FC = () => {
  return (
    <Section>
      <InfoAboutMe />
      <Social />
      <Background background={BACKGROUND} />
      <Avatar />
      <Blur />
    </Section>
  );
};
