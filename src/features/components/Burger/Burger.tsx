import { FC, useContext } from 'react';

import style from './Burger.module.css';
import { Context } from '../..';

export const Burger: FC = () => {
  const {isOpen, setIsOpen} = useContext(Context);
  
  return (
    <>
      {!isOpen && (
        <button className={style.burger} onClick={() => setIsOpen(true)}>
          <span className={style.lineOne}></span>
          <span className={style.lineTwo}></span>
          <span className={style.lineThree}></span>
        </button>
      )}
    </>
  );
};
