import { FC } from 'react';

import { SOCIAL } from '../../constants/constants';

import style from './Social.module.css';
import { SocialItem } from '../SocialItem/SocialItem';

export const Social: FC = () => {
  return (
    <div className={style.social}>
      <ul className={style.socialList}>
        {SOCIAL.map(({ image, link }) => (
          <SocialItem key={link} image={image} link={link} />
        ))}
      </ul>
    </div>
  );
};
