import { FC, useState } from 'react';

import style from './Layout.module.css';
import { Routing } from '../router/Routing';
import { Burger } from '../components/Burger/Burger';
import Portal from '../components/Potral/Portal';
import { Aside } from '../components/Aside/Aside';
import { Context } from '../context/context';

export const Layout: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Context.Provider value={{isOpen, setIsOpen}}>
    <main className={style.main}>
      <Routing>
      <Portal>
        <Aside />
      </Portal>
      </Routing>
      <Burger />
    </main>
    </Context.Provider>
  );
};
