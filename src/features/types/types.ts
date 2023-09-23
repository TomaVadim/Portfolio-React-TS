export type Expereince = {
  id: number;
  work: string;
  position: string;
  period: string;
};

export type Navigation = {
  id: number;
  path: string;
  link?: string;
};

export type Skills = {
  id: number;
  skill: string;
  countFill?: number;
  countOutlined?: number;
  inProces?: string;
  icon?: string;
};

export type Social = {
  image: string;
  link: string;
};
