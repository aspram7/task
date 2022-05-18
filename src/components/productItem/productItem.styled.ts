import styled from "styled-components";

export const ProductItemContainer = styled.div`
  margin-bottom: 74px;
  @media (max-width: 1100px) {
    margin: 0;
  }
`;

export const ImgWrapper = styled.div`
  border-radius: 10px;
  position: relative;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

export const LikeImage = styled.img`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const ProductInfo = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-size: 14px;
  @media (max-width: 1100px) {
    display: unset;
  }
`;

export const ProductName = styled.h6`
  font-size: 14px;
`;
