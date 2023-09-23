import { FC } from 'react';

import style from './SocialList.module.css';
import { Social, SocialItem } from '../../features';

type Props = {
  list: Social[];
};

export const SocialList: FC<Props> = ({ list }) => {
  return (
    <div className={style.social}>
      <ul className={style.socialList}>
        {list.map(({ image, link }) => (
          <SocialItem key={link} image={image} link={link} />
        ))}
      </ul>
    </div>
  );
};
