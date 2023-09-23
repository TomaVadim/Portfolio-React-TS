import { FC } from 'react';

import style from './ExpereinceList.module.css';
import { Expereince } from '../../features';

type Props = {
  list: Expereince[];
};

export const ExpereinceList: FC<Props> = ({ list }) => {
  return (
    <ul className={style.list}>
      {list.map(({ id, work, position, period }) => (
        <li key={id} className={style.work}>
          <span>{work}</span>
          <span className={style.position}>{position}</span>
          <span className={style.period}>{period}</span>
        </li>
      ))}
    </ul>
  );
};
