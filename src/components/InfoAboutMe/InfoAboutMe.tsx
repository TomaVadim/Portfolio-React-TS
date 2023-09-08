import { FC } from 'react';

import style from './InfoAboutMe.module.css';

export const InfoAboutMe:FC = () => {
  return (
    <div className={style.info}>
      <p className={style.paragraph}>
      I have been working in the trade for over 3 years. About myself I can say that I am punctual, responsible and purposeful. I also do sports. I always strive for self-development and want to learn something new. I strive to find an interesting profession of a front-end developer in which I will constantly grow.
      </p>
      <span className={style.regards}>
        Best regards, Vadim.
      </span>
    </div>
  );
};
