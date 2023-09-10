export interface Expereince {
  id: number;
  position: string;
  period: string;
}

export interface Navigation {
  id: number;
  path: string;
  link?: string; 
}

export interface Skills {
  id: number;
  skill: string;
  countFill?: number;
  countOutlined?: number;
  inProces?: string;
  icon?: string;
}

export interface Social {
  image: string;
  link: string;
}