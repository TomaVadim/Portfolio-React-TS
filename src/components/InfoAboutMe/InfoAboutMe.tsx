import { FC } from 'react';

import style from './InfoAboutMe.module.css';

export const InfoAboutMe: FC = () => {
  return (
    <div className={style.info}>
      <p className={style.paragraph}>
        Developer with more than 1 year of experience. Having commercial
        experience in several small freelance projects, I am always looking for
        the best solution using the latest technologies.
      </p>
      <span className={style.regards}>Best regards, Vadim.</span>
    </div>
  );
};
