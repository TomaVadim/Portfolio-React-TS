import { FC } from 'react';

import style from './GreetingTitles.module.css';
import resume from '../../assets/Resume.pdf';
import { ButtonDownload } from '../UI/ButtonDownload/ButtonDownload';

type GreetingTitlesProps = {
  subtitle: string;
  title: string;
  profesion: string;
};

export const GreetingTitles: FC<GreetingTitlesProps> = ({
  subtitle,
  title,
  profesion,
}) => {
  return (
    <div className={style.greetingTitles}>
      <h2 className={style.subtitle}>{subtitle}</h2>
      <h1 className={style.title}>{title}</h1>
      <h3 className={style.profesion}>{profesion}</h3>
      <ButtonDownload 
        href={resume} 
        fileName='Resume-Vadim-Toma-Frontend.pdf'
      >
        Download CV
      </ButtonDownload>
    </div>
  );
};
