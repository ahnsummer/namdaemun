import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@mui/base';
import { TextField } from '@mui/material';

import { FlexBetween, FlexCenter } from '@/styles/globals';

const Navigation = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    setCategories([
      '베스트10',
      '인절미&구름떡',
      '찹쌀떡&수능합격떡',
      '고급특별선물세트',
      '답례떡',
    ]);
  }, []);

  return (
    <FlexBetween className="flex-col text-sm border-b">
      <FlexBetween className="narrow-container py-4">
        <FlexBetween className="w-1/3">
          <TextField hiddenLabel className="w-80" size="small" />
        </FlexBetween>
        <FlexCenter className="w-1/3">
          <Link href={'/'}>
            <Image
              src="/images/namdaemun.svg"
              width={150}
              height={100}
              alt="logo"
              priority
            />
          </Link>
        </FlexCenter>
        <FlexBetween className="w-1/3">
          <Button>로그인</Button>
          <Button>회원가입</Button>
          <Link className="flex" href={`tel:757-0095`}>
            <Image
              src="/images/telephone.png"
              className="mr-1"
              width={20}
              height={20}
              alt="telephone"
              priority
            />
            <span>757-0095</span>
          </Link>
          <Button onClick={() => alert('장바구니가 클릭됐습니다')}>
            <Image
              src="/images/shopping-cart.png"
              width={20}
              height={30}
              alt="shopping cart"
            />
          </Button>
          <Link href={'/'}>Q&A</Link>
        </FlexBetween>
      </FlexBetween>
      <div className="w-full border-t" />
      <FlexBetween className="narrow-container py-4 font-semibold">
        {categories.map((category) => (
          <Link key={category} href={`/${category}`}>
            {category}
          </Link>
        ))}
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navigation;
