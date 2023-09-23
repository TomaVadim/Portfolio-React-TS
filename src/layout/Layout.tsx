import { FC, useState } from 'react';

import style from './Layout.module.css';
import { Routing } from '../router/Routing';
import { Burger, Context, NAVIGATION, Portal } from '../features';
import { Aside } from '../components/Aside/Aside';

export const Layout: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Context.Provider value={{isOpen, setIsOpen}}>
    <main className={style.main}>
      <Routing>
      <Portal>
        <Aside list={NAVIGATION} />
      </Portal>
      </Routing>
      <Burger />
    </main>
    </Context.Provider>
  );
};
