import linkedIn from '../assets/social/linkedin.png';
import instagram from '../assets/social/instagram.png';
import telegram from '../assets/social/telegram.png';
import github from '../assets/social/github.png';

import { Expereince, Navigation, Skills, Social } from '../types/types';

export const SOCIAL: Social[] = [
  { image: linkedIn, link: 'https://www.linkedin.com/in/vadim-toma-046925247' },
  {
    image: instagram,
    link: 'https://instagram.com/_vadim_toma_?igshid=OGQ5ZDc2ODk2ZA==',
  },
  { image: telegram, link: 'https://t.me/vadimtoma' },
  { image: github, link: 'https://github.com/TomaVadim' },
];

export const SKILLS: Skills[] = [
  { id: 1, skill: 'Html', countFill: 9, countOutlined: 1 },
  { id: 2, skill: 'Css', countFill: 9, countOutlined: 1 },
  { id: 3, skill: 'Sass', countFill: 9, countOutlined: 1 },
  { id: 4, skill: 'Tailwind', countFill: 8, countOutlined: 2 },
  { id: 5, skill: 'Rest Api', countFill: 9, countOutlined: 1 },
  { id: 6, skill: 'JavaScript', countFill: 7, countOutlined: 3 },
  { id: 7, skill: 'TypeScript', countFill: 7, countOutlined: 3 },
  { id: 8, skill: 'React', countFill: 9, countOutlined: 1 },
  { id: 9, skill: 'Npm', countFill: 9, countOutlined: 1 },
  { id: 10, skill: 'Git', countFill: 7, countOutlined: 3 },
  { id: 11, skill: 'Vite', countFill: 7, countOutlined: 3 },
  { id: 3, skill: 'Axios', countFill: 9, countOutlined: 1 },
];

export const NAVIGATION: Navigation[] = [
  { id: 1, path: '/', link: 'HOME' },
  { id: 2, path: '/about', link: 'ABOUT ME' },
  { id: 3, path: '/skills', link: 'SKILLS' },
  { id: 4, path: '/portfolio', link: 'PORTFOLIO' },
  // { id: 5, path: '/expereince', link: 'EXPEREINCE' },
];

export const EXPEREINCE: Expereince[] = [
  {
    id: 1,
    work: 'Freelance',
    position: 'Freelancer',
    period: 'more than 6 month',
  },
];
