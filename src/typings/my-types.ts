export type NavbarItem = {
  id: number;
  title: string;
  href: string;
};

export type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
  stack: ProjectStack[];
  repositoryLink: string;
  deployLink: string;
};

export type ProjectStack = {
  id: number;
  title: string;
};

export type CustomSelectOption = {
  id: number;
  title: string;
  value: string;
};
