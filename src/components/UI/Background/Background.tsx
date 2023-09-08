import { FC } from 'react';

import style from './Background.module.css';

interface BackgroundProps {
  background: string;
}

export const Background: FC<BackgroundProps> = ({ background }) => {
  return (
      <div className={style.backgroundContainer}>
        <img
          className={style.backgroundImage}
          src={background}
          alt='background'
        />
      </div>
  );
};
