import { FC, useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Greeting } from '../pages/Creeting/Creeting';
import { Burger } from '../components/Burger/Burger';
import Portal from '../components/Potral/Portal';
import { Aside } from '../components/Aside/Aside';

import style from './Routing.module.css';
import { Skills } from '../pages/Skills/Skills';
import { About } from '../pages/About/About';
import { Expereince } from '../pages/Expereince/Expereince';
import { Portfolio } from '../pages/Portfolio/Portfolio';

export const Routing: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIsOpen = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <Router>
      <main className={style.main}>
        <Routes>
          <Route path='/' element={<Greeting />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/about' element={<About />} />
          <Route path='/expereince' element={<Expereince />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
        <Burger isOpen={isOpen} handleIsOpen={handleIsOpen} />
        <Portal>
          <Aside isOpen={isOpen} handleIsOpen={handleIsOpen} />
        </Portal>
      </main>
    </Router>
  );
};
