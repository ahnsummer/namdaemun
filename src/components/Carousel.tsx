import Image from 'next/image';
import classNames from 'classnames';
import { Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

import { CarouselProps } from '@/interfaces';

const CustomCarousel = ({ items, className }: CarouselProps) => {
  return (
    <Carousel className={classNames(className)}>
      {items.map((item) => (
        <Paper key={item.title} className="relative h-[500px]">
          <Image src={item.image} className="absolute" fill alt={item.title} />
          <p>{item.title}</p>
          <div>{item.content}</div>
        </Paper>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
