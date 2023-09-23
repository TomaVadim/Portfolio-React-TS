import { GreetingTitles } from './components/GreetingTitles/GreetingTitles';
import { Burger } from './components/Burger/Burger';
import { Section } from './components/Section/Section';
import { Slider } from './components/Slider/Slider';
import { SocialItem } from './components/SocialItem/SocialItem';
import { Avatar } from './components/UI/Avatar/Avatar';
import { Background } from './components/UI/Background/Background';
import { Blur } from './components/UI/Blur/Blur';
import { Stars } from './components/UI/Stars/Stars';
import { SOCIAL } from './constants/constants';
import { SKILLS } from './constants/constants';
import { NAVIGATION } from './constants/constants';
import { EXPEREINCE } from './constants/constants';
import BACKGROUND from './assets/main-background-abstract.jpg';
import AVATAR from './assets/avatar.png';
import { Context } from './context/context';
import { Expereince } from './types/types';
import { Navigation } from './types/types';
import { Skills } from './types/types';
import { Social } from './types/types';
import {useOutsideClick} from './hooks/useOutsideClick';
import { Portal } from './components/Potral/Portal';

export {
  GreetingTitles,
  Burger,
  Section,
  Slider,
  SocialItem,
  Avatar,
  Background,
  Blur,
  Stars,
  SOCIAL,
  SKILLS,
  NAVIGATION,
  EXPEREINCE,
  BACKGROUND,
  AVATAR,
  Portal,
  useOutsideClick,
  Context,
};

export type { Expereince, Navigation, Social, Skills };
