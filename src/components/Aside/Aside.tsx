import { FC, useContext, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Link } from 'react-router-dom';

import { useOutsideClick } from '../../features';

import 'material-symbols';

import style from './Aside.module.css';
import './aside-transition.css';
import { Context, Navigation, SOCIAL } from '../../features';
import { SocialList } from '../SocialList/SocialList';

type Props = {
  list: Navigation[];
};

export const Aside: FC<Props> = ({ list }) => {
  const asideRef = useRef(null);
  const { isOpen, setIsOpen } = useContext(Context);

  useOutsideClick(asideRef, setIsOpen);

  return (
    <CSSTransition
      in={isOpen}
      nodeRef={asideRef}
      classNames='aside'
      timeout={300}
    >
      <aside className={style.aside} ref={asideRef}>
        <ul className={style.list}>
          {list.map((navigator) => (
            <li
              key={navigator.id}
              className={style.item}
              onClick={() => setIsOpen(false)}
            >
              <Link to={navigator.path}>{navigator.link}</Link>
            </li>
          ))}
          <SocialList list={SOCIAL} />
        </ul>
        <span
          onClick={() => setIsOpen(false)}
          className='material-symbols-outlined close'
        >
          close
        </span>
      </aside>
    </CSSTransition>
  );
};
