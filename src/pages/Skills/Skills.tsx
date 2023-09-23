import { FC } from 'react';
import { BACKGROUND, Background, Blur, SKILLS, SOCIAL, Section } from '../../features';
import { SkillsList } from '../../components/SkillsList/SkillsList';
import { SocialList } from '../../components/SocialList/SocialList';

export const Skills: FC = () => {
  return (
    <Section>
      <SkillsList list={SKILLS} />
      <SocialList list={SOCIAL}/>
      <Background background={BACKGROUND} />
      <Blur />
    </Section>
  );
};
