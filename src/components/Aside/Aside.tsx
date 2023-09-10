import { FC, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Link } from 'react-router-dom';
import { Social } from '../Social/Social';

import useOutsideClick from '../../hooks/useOutsideClick';
import { NAVIGATION } from '../../constants/constants';

import 'material-symbols';

import style from './Aside.module.css';
import './aside-transition.css';

interface Props {
  isOpen: boolean;
  handleIsOpen: (open: boolean) => void;
}

export const Aside: FC<Props> = ({ isOpen, handleIsOpen }) => {
  const asideRef = useRef(null);

  useOutsideClick(asideRef, handleIsOpen);

  return (
    <CSSTransition
      in={isOpen}
      nodeRef={asideRef}
      classNames='aside'
      timeout={300}
    >
      <aside className={style.aside} ref={asideRef}>
        <ul className={style.list}>
          {NAVIGATION.map((navigator) => (
            <li
              key={navigator.id}
              className={style.item}
              onClick={() => handleIsOpen(false)}
            >
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
  );
};
