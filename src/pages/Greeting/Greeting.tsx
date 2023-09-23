import { FC } from 'react';

import style from './Greeting.module.css';
import { BACKGROUND, Background, GreetingTitles, SOCIAL } from '../../features';
import { SocialList } from '../../components/SocialList/SocialList';

export const Greeting: FC = () => {
  return (
    <section className={style.main}>
      <div className={style.container}>
        <div className={style.greeting}>
          <GreetingTitles
            subtitle="Welcome! I'm"
            title='Vadim Toma'
            profesion='Front-end Developer'
          />
          <SocialList list={SOCIAL} />
        </div>
      </div>
      <Background background={BACKGROUND} />
    </section>
  );
};
