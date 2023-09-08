import { FC, useRef } from 'react';

import { Link } from 'react-router-dom';

import style from './Aside.module.css';
import './Aside.css';

import 'material-symbols';

import { CSSTransition } from 'react-transition-group';

import useOutsideClick from '../../hooks/useOutsideClick';
import { NAVIGATION } from '../../constants/constants';
import { Social } from '../Social/Social';

interface AsideProps {
  isOpen: boolean;
  handleIsOpen: (open: boolean) => void;
}

export const Aside: FC<AsideProps> = ({ isOpen, handleIsOpen }) => {
  const asideRef = useRef(null);

  useOutsideClick(asideRef, handleIsOpen);

  return (
    <>
      <CSSTransition
        in={isOpen}
        nodeRef={asideRef}
        classNames='aside'
        timeout={300}
      >
        <aside className={style.aside} ref={asideRef}>
          <ul className={style.list}>
            {NAVIGATION.map((navigator) => (
              <li key={navigator.id} className={style.item} onClick={() => handleIsOpen(false)}>
                <Link to={navigator.path}>{navigator.link}</Link>
              </li>
            ))}
              <Social />
          </ul>
          <span
            onClick={() => handleIsOpen(false)}
            className='material-symbols-outlined close'
          >
            close
          </span>
        </aside>
      </CSSTransition>
    </>
  );
};
