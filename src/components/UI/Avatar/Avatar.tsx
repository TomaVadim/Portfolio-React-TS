import { FC } from 'react';

import { AVATAR } from '../../../constants/constants';

import style from './Avatar.module.css';

export const Avatar: FC = () => {
  return (
    <div className={style.avatar}>
      <img className={style.image} src={AVATAR} alt='my-photo' />
    </div>
  );
};
