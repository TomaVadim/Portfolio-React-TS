import { FC } from 'react';

import style from './SkillsList.module.css';
import { Skills, Stars } from '../../features';

type Props = {
  list: Skills[];
};

export const SkillsList: FC<Props> = ({ list }) => {
  return (
    <ul className={style.list}>
      {list.map(({ id, skill, countFill, countOutlined }) => (
        <li key={id} className={style.skill}>
          {skill}
          <Stars countFill={countFill} countOutlined={countOutlined} />
        </li>
      ))}
    </ul>
  );
};
