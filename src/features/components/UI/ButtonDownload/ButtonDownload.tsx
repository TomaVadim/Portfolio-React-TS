import { FC } from 'react';

import style from './ButtonDownload.module.css';

type Props = {
  href: string;
  fileName: string;
  children: string;
};

export const ButtonDownload: FC<Props> = ({ href, fileName, children }) => {
  return (
    <a className={style.button} href={href} download={fileName}>
      {children}
    </a>
  );
};
