export type About = {
  name: string;
  lastName: string;
  profession: string;
};

export type ContactMeType = {
  address: string;
  web: string;
  phone: string;
};

export type EducationType = {
  period: string;
  school: string;
  degree?: string;
  description: string;
};

export type ExperienceType = {
  period: string;
  company: string;
  description: string;
};

export type ProSkillsType = {
  skill: string;
  width: number;
};
