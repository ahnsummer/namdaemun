import { FlexCenter } from '@/styles/globals';
import { banners, bestRiceCakes } from '@/fixtures';

import Item from '@/components/Item';
import Title from '@/components/Label';
import CustomCarousel from '@/components/Carousel';

export default function Home() {
  return (
    <FlexCenter className="flex-col overflow-auto">
      <CustomCarousel className="w-full" items={banners} />
      <div className="container my-8">
        <Title
          label="BEST ITEMS"
          content="남대문떡집의 인기 상품을 확인해보세요"
        />
        <div className="w-full grid grid-cols-4 gap-x-4 gap-y-8">
          {bestRiceCakes.map((riceCake) => (
            <Item
              key={riceCake.title}
              title={riceCake.title}
              content={riceCake.content}
              link={`product/${riceCake.link}`}
              image={riceCake.image}
            />
          ))}
        </div>
      </div>
    </FlexCenter>
  );
}
