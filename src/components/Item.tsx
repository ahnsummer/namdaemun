import { ItemProps } from '@/interfaces';
import { FlexBetween, FlexCenter } from '@/styles/globals';
import Image from 'next/image';
import Link from 'next/link';

const Item = ({ image, link, title, content, price }: ItemProps) => {
  return (
    <FlexBetween>
      <Link href={link} className="w-[305px]">
        <FlexCenter className="flex-col">
          <Image src={image} width={305} height={305} alt={title} />
          <p className="w-full border-b font-semibold">{title}</p>
          <div className="w-full text-sm text-slate-500">{content}</div>
          <p>{price}</p>
        </FlexCenter>
      </Link>
    </FlexBetween>
  );
};

export default Item;
