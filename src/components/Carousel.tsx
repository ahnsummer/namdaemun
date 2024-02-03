import { CarouselProps } from '@/interfaces';
import { Paper } from '@mui/material';
import classNames from 'classnames';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';

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
