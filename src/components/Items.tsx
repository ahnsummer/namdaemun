import { FlexCenter } from '@/styles/globals';
import CustomCarousel from './Carousel';
import { ItemProps } from '@/interfaces';

interface ItemsProps {
  label: string;
  title: string;
  contents: string[];
}

const Items = ({ label, title, contents }: ItemsProps) => {
  return (
    <FlexCenter className="flex-col">
      <h1 className="text-2xl font-semibold">{label}</h1>
      <p className="text-gray-500">{title}</p>
      <div>
        {contents.map((content, idx) => (
          <div key={idx}>{content}</div>
          // <CustomCarousel key={idx} items={content} />
        ))}
      </div>
    </FlexCenter>
  );
};

export default Items;
