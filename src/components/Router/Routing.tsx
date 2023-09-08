import { FC, useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Greeting } from '../Pages/Creeting/Greeting';
import { Burger } from '../Burger/Burger';
import Portal from '../Potral/Portal';
import { Aside } from '../Aside/Aside';

import style from './Routing.module.css';
import { Skills } from '../Pages/Skills/Skills';
import { About } from '../Pages/About/About';
import { Expereince } from '../Pages/Expereince/Expereince';
import { Portfolio } from '../Pages/Portfolio/Portfolio';

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
