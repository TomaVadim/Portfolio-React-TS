import { FC } from 'react';

import { Background } from '../../components/UI/Background/Background';
import { Social } from '../../components/Social/Social';
import { GreetingTitles } from '../../components/GreetingTitles/GreetingTitles';

import { BACKGROUND } from '../../constants/constants';

import style from './Greeting.module.css';


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
          <Social />
        </div>
      </div>
      <Background background={BACKGROUND} />
    </section>
  );
};
