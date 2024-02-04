import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { FlexCenter } from '@/styles/globals';
import CustomCarousel from '@/components/Carousel';
import { ItemProps } from '@/interfaces';
import Items from '@/components/Items';

export default function Home() {
  const [items, setItems] = useState<ItemProps[]>([
    {
      image: '/images/main/ricecake_1.jpeg',
      title: 'one',
      content: 'one',
      link: '/',
    },
    {
      image: '/images/main/ricecake_2.jpeg',
      title: 'one',
      content: 'one',
      link: '/',
    },
    {
      image: '/images/main/ricecake_3.jpeg',
      title: 'one',
      content: 'one',
      link: '/',
    },
  ]);

  const [list, setList] = useState<string[]>(['1', '2', '3', '4', '5', '6']);

  return (
    <FlexCenter className="flex-col">
      <Navigation />
      <CustomCarousel className="w-full" items={items} />
      <div className="container h-screen bg-slate-50">
        <Items
          label="BEST ITEMS"
          title="남대문 떡집의 베스트 10 떡을 맛보세요!"
          contents={list}
        />
      </div>
    </FlexCenter>
  );
}
