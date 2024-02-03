export type ItemProps = {
  image: string;
  title: string;
  content: string;
  link: string;
};

export type CarouselProps = {
  items: ItemProps[];
  className: string;
};
