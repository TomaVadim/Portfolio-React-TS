import linkedIn from '../images/social/linkedin.png';
import instagram from '../images/social/instagram.png';
import telegram from '../images/social/telegram.png';
import github from '../images/social/github.png';
import BACKGROUND from '../images/main-background-abstract.jpg';
import AVATAR from '../images/avatar.png';

import {
  Expereince,
  Navigation,
  Skills,
  Social,
} from '../interfaces/interfaces';

export { BACKGROUND, AVATAR };

export const SOCIAL: Social[] = [
  { image: linkedIn, link: 'https://www.linkedin.com/in/vadim-toma-046925247' },
  { image: instagram, link: 'https://instagram.com/_vadim_toma_?igshid=OGQ5ZDc2ODk2ZA==' },
  { image: telegram, link: 'https://t.me/vadimtoma' },
  { image: github, link: 'https://github.com/TomaVadim' },
];

export const SKILLS: Skills[] = [
  { id: 1, skill: 'HTML5', countFill: 9, countOutlined: 1 },
  { id: 2, skill: 'CSS', countFill: 9, countOutlined: 1 },
  { id: 3, skill: 'SCSS', countFill: 9, countOutlined: 1 },
  { id: 4, skill: 'JavaScript', countFill: 7, countOutlined: 3 },
  { id: 5, skill: 'TypeScript', countFill: 7, countOutlined: 3 },
  { id: 6, skill: 'React', countFill: 9, countOutlined: 1 },
  { id: 7, skill: 'NPM', countFill: 9, countOutlined: 1 },
  { id: 8, skill: 'GIT', countFill: 7, countOutlined: 3 },
  { id: 9, skill: 'Vite', countFill: 7, countOutlined: 3 },
];

export const NAVIGATION: Navigation[] = [
  { id: 1, path: '/', link: 'HOME' },
  { id: 2, path: '/about', link: 'ABOUT ME' },
  { id: 3, path: '/skills', link: 'SKILLS' },
  { id: 4, path: '/portfolio', link: 'PORTFOLIO' },
  { id: 5, path: '/expereince', link: 'EXPEREINCE' },
];

export const EXPEREINCE: Expereince[] = [
  { id: 1, position: 'Freelance', period: 'more than 6 month' },
];
