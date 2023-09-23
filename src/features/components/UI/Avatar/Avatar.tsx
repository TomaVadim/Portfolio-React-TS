import { FC } from 'react';

import style from './Avatar.module.css';

type Props = {
  image: string;
};

export const Avatar: FC<Props> = ({ image }) => {
  return (
    <div className={style.avatar}>
      <img className={style.image} src={image} alt='my-photo' />
    </div>
  );
};
