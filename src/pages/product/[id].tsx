import { GetServerSideProps } from 'next';
import Image from 'next/image';

import { bestRiceCakes } from '@/fixtures';
import { ItemProps } from '@/interfaces';
import { FlexCenter, ImageWrapper } from '@/styles/globals';
import styled from '@emotion/styled';

const Row = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 0;
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  const ricecake = bestRiceCakes.find((cake) => cake.link === id);

  return {
    props: { ricecake },
  };
};

const Product = ({ ricecake }: { ricecake: ItemProps }) => {
  return (
    <FlexCenter className="py-8">
      <FlexCenter className="!container">
        <div className="w-full grid grid-cols-2 gap-x-8">
          <ImageWrapper>
            <Image src={ricecake.image} fill alt={ricecake.title} />
          </ImageWrapper>
          <div className="w-full">
            <div className="py-4 border-b">
              <h1 className="text-3xl font-medium">{ricecake.title}</h1>
              <p className="pt-2 text-sm">{ricecake.content}</p>
            </div>

            <div className="w-full">
              <Row className="w-full flex py-4">
                <span className="w-2/5 text-gray-600">판매 가격</span>
                <span className="w-3/5 font-semibold">{ricecake.price}원</span>
              </Row>
              <Row className="w-full flex py-4">
                <span className="w-2/5 text-gray-600">배송 방법</span>
                <span className="w-3/5 font-semibold">택배</span>
              </Row>
              <Row className="w-full flex py-4">
                <span className="w-2/5 text-gray-600">구매 수량</span>
                <span className="w-3/5 font-semibold"></span>
              </Row>
            </div>
          </div>
        </div>
      </FlexCenter>
    </FlexCenter>
  );
};

export default Product;
