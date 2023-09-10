import { FC } from 'react';

import { Social } from '../../components/Social/Social';
import { Background } from '../../components/UI/Background/Background';
import { Section } from '../../components/UI/Section/Section';

import { BACKGROUND } from '../../constants/constants';
import { InfoAboutMe } from '../../components/InfoAboutMe/InfoAboutMe';
import { Avatar } from '../../components/UI/Avatar/Avatar';
import { Blur } from '../../components/UI/Blur/Blur';


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
