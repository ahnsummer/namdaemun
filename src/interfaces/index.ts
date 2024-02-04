export type ItemProps = {
  image: string;
  title: string;
  content: string;
  link: string;
  price?: number;
};

export type CarouselProps = {
  items: ItemProps[];
  className: string;
};
