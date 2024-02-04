import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { FlexBetween, FlexCenter } from '@/styles/globals';
import CustomCarousel from '@/components/Carousel';
import Items from '@/components/Items';
import { banners, bestRiceCakes } from '@/fixtures';
import Item from '@/components/Item';
import Title from '@/components/Label';
import Footer from '@/components/Footer';

export default function Home() {
  const [list, setList] = useState<string[]>(['1', '2', '3', '4', '5', '6']);

  return (
    <FlexCenter className="flex-col">
      <Navigation />
      <CustomCarousel className="w-full" items={banners} />
      <div className="container h-screen my-8 bg-slate-50">
        <Title
          label="BEST ITEMS"
          content="남대문떡집의 인기 상품을 확인해보세요"
        />
        <div className="grid grid-cols-4 gap-4">
          {bestRiceCakes.map((riceCake) => (
            <Item
              key={riceCake.title}
              title={riceCake.title}
              content={riceCake.content}
              link={riceCake.link}
              image={riceCake.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </FlexCenter>
  );
}
