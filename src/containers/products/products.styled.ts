import styled from "styled-components";

export const Products = styled.section`
  padding: 0 76px;
  @media (max-width: 1100px) {
    padding: 0 16px;
  }
`;

export const ShownItems = styled.div`
  font-size: 14px;
  margin: 46px 86px 29px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1100px) {
    margin: 16px 0;
  }
`;

export const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10%;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
  }
`;

export const Sort = styled.div`
  display: flex;
  align-items: center;
`;

export const SortBy = styled.div`
  border: 1px solid #a0a0a0;
  border-right: none;
  border-radius: 6px 0 0 6px;
  font-size: 14px;
  position: relative;
  padding: 7px 16px;
  @media (max-width: 1100px) {
    padding: 4px 16px;
  }
`;

export const SortName = styled.div`
  border: 1px solid #a0a0a0;
  border-radius: 0 6px 6px 0;
  font-size: 14px;
  padding: 7px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  @media (max-width: 1100px) {
    padding: 4px 16px;
  }
`;

export const Icon = styled.img`
  width: 8px;
  height: 15px;
  margin-left: 15px;
  transform: ${({ theme }) => `rotate(${theme.active ? "90deg" : 0})`};
`;

export const SortList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 150px;
  z-index: 100;
  background-color: #e5e5e5;
  margin-top: 10px;
  box-sizing: border-box;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border: 1px solid #a0a0a0;
`;

export const SortItem = styled.div`
  padding: 5px;
  &:hover {
    background-color: #b5b5b5;
  }
`;
