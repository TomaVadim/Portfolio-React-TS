import { FC, ReactElement } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Greeting } from '../pages/Creeting/Creeting';
import { Skills } from '../pages/Skills/Skills';
import { About } from '../pages/About/About';
import { Expereince } from '../pages/Expereince/Expereince';
import { Portfolio } from '../pages/Portfolio/Portfolio';

interface Props {
  children: ReactElement,
}

export const Routing: FC<Props> = ({children}) => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Greeting />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/about' element={<About />} />
        <Route path='/expereince' element={<Expereince />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
      {children}
    </Router>
  );
};
