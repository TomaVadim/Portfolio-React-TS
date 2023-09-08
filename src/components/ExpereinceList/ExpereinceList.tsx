import { FC } from 'react';

import { EXPEREINCE } from '../../constants/constants';

import style from './ExpereinceList.module.css';

export const ExpereinceList: FC = () => {
  return (
    <ul className={style.list}>
      {EXPEREINCE.map(({ id, position, period }) => (
        <li key={id} className={style.position}>
          <span >
            {position}
          </span> 
          <span className={style.period}>
            {period}
          </span>
        </li>
      ))}
    </ul>
  );
};
