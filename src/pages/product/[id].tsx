import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import styled from '@emotion/styled';
import { Box, Button, TextField } from '@mui/material';
import { FaMinus, FaPlus } from 'react-icons/fa6';

import { bestRiceCakes } from '@/fixtures';
import { ItemProps } from '@/interfaces';
import { FlexBetween, FlexCenter, ImageWrapper } from '@/styles/globals';

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  const [count, setCount] = useState<number>(1);

  return (
    <FlexCenter className="py-8">
      <FlexCenter className="!narrow-container">
        <div className="w-full grid grid-cols-2 gap-x-8">
          <ImageWrapper>
            <Image src={ricecake.image} fill alt={ricecake.title} />
          </ImageWrapper>
          <div className="w-full">
            <FlexBetween className="h-full flex-col">
              <div className="w-full">
                <div className="py-4 border-b">
                  <h1 className="text-3xl font-medium">{ricecake.title}</h1>
                  <p className="pt-2 text-sm">{ricecake.content}</p>
                </div>

                <Row>
                  <span className="w-2/5 text-gray-600">판매 가격</span>
                  <span className="w-3/5 font-semibold">
                    {ricecake.price}원
                  </span>
                </Row>
                <Row>
                  <span className="w-2/5 text-gray-600">배송 방법</span>
                  <span className="w-3/5 font-semibold">택배</span>
                </Row>
                <Row>
                  <span className="w-2/5 text-gray-600">구매 수량</span>
                  <span className="w-3/5 font-semibold">
                    <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '5ch' },
                      }}
                      noValidate
                      autoComplete="off"
                      className="flex justify-center items-center"
                    >
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => setCount(count - 1)}
                      >
                        <FaMinus />
                      </Button>
                      <TextField
                        hiddenLabel
                        id="outlined-size-small"
                        defaultValue={1}
                        value={count}
                        size="small"
                      />
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => setCount(count + 1)}
                      >
                        <FaPlus />
                      </Button>
                    </Box>
                  </span>
                </Row>
              </div>
              <div className="w-full flex items-center">
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  className="mr-4"
                >
                  바로구매
                </Button>
                <Button variant="outlined" size="large">
                  장바구니
                </Button>
              </div>
            </FlexBetween>
          </div>
        </div>
      </FlexCenter>
    </FlexCenter>
  );
};

export default Product;
