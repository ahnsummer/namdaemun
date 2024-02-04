import styled from '@emotion/styled';

export const FlexCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexBetween = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;

  & > * {
    object-filt: contain !important;
    position: relative !important;
    height: auto;
  }
`;
