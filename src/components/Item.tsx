import Link from 'next/link';
import Image from 'next/image';

import { ItemProps } from '@/interfaces';
import { FlexCenter } from '@/styles/globals';

const Item = ({ image, link, title, content, price }: ItemProps) => {
  return (
    <Link href={link} className="w-full">
      <FlexCenter className="w-full flex-col">
        <Image src={image} width={400} height={400} alt={title} />
        <p className="w-full border-b font-semibold">{title}</p>
        <div className="w-full text-sm text-gray-500">{content}</div>
        <p>{price}</p>
      </FlexCenter>
    </Link>
  );
};

export default Item;
