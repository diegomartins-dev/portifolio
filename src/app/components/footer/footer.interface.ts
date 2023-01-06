export interface IFooter {
  logo: {
    src: string;
    alt: string;
  };
  title: string;
  copyright: string;
  description: string;
  links: ILink[];
  social: ISocial[];
}

interface ILink {
  class: string;
  href: string;
  target: string;
  icon: string;
  title: string;
}

interface ISocial {
  class: string;
  href: string;
  title: string;
}
