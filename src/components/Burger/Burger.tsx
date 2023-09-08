import { FC } from 'react';

import style from './Burger.module.css';

interface BurgerProps {
  isOpen: boolean;
  handleIsOpen: (open: boolean) => void;
}

export const Burger: FC<BurgerProps> = ({ isOpen, handleIsOpen }) => {
  return (
    <>
      {!isOpen ? (
        <button className={style.burger} onClick={() => handleIsOpen(true)}>
          <span className={style.lineOne}></span>
          <span className={style.lineTwo}></span>
          <span className={style.lineThree}></span>
        </button>
      ) : (
        <></>
      )}
    </>
  );
};
