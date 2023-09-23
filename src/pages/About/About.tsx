import { FC } from 'react';
import { AVATAR, Avatar, BACKGROUND, Background, Blur, SOCIAL, Section } from '../../features';
import { InfoAboutMe } from '../../components/InfoAboutMe/InfoAboutMe';
import { SocialList } from '../../components/SocialList/SocialList';

export const About: FC = () => {
  return (
    <Section>
      <InfoAboutMe />
      <SocialList list={SOCIAL} />
      <Background background={BACKGROUND} />
      <Avatar image={AVATAR} />
      <Blur />
    </Section>
  );
};
