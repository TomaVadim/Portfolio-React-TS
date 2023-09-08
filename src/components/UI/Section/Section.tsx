import { FC, ReactNode } from 'react';

import style from './Section.module.css';

interface SectionProps {
  children: ReactNode;
}

export const Section:FC<SectionProps> = ({children}) => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        {children}
      </div>
    </section>
  );
};
