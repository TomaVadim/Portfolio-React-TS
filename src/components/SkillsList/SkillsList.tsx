import { FC } from 'react';

import { Stars } from '../UI/Stars/Stars';
import { SKILLS } from '../../constants/constants';

import style from './SkillsList.module.css';

export const SkillsList: FC = () => {
  return (
    <ul className={style.list}>
      {SKILLS.map(({ id, skill, countFill, countOutlined }) => (
        <li key={id} className={style.skill}>
          {skill}
          <Stars countFill={countFill} countOutlined={countOutlined} />
        </li>
      ))}
    </ul>
  );
};
