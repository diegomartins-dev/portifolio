export interface ICarouselProjects {
  category: string;
  image: {
    src: string;
    alt: string;
    bg: string;
  };
  status: {
    class: string;
    title: string;
  };
  body: {
    title: string;
    description: string;
    technologies: Array<string>;
  };
  links: ILink[];
}

interface ILink {
  href: string;
  title: string;
}
