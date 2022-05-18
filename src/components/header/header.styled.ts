import styled from "styled-components";

export const Header = styled.header`
  height: 118px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 76px;
  border-radius: 0px 0px 30px 30px;

  @media (max-width: 1100px) {
    height: 64px;
    padding: 0 16px;
    border-radius: unset;
  }
`;

export const Menu = styled.nav`
  display: flex;
  gap: 48px;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const MobileMenu = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 13px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    width: 20px;
    height: 1px;
    background: ${({ theme }) => (theme.open ? "#0D0C1D" : "#EFFFFA")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background-color: #333333;
    :first-child {
      transform: ${({ theme }) => (theme.open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ theme }) => (theme.open ? "0" : "1")};
      transform: ${({ theme }) => (theme.open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ theme }) => (theme.open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media (min-width: 1100px) {
    display: none;
  }
`;

export const MenuItem = styled.div`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const ImgWrapper = styled.div`
  cursor: pointer;
  img {
    height: 100%;
  }
  @media (max-width: 1100px) {
    height: 30px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Search = styled.input`
  width: 100px;
  text-align: center;
  border: none;
  outline: none;
  font-size: 18px;
`;
export const MobileSearch = styled.img`
  cursor: pointer;
  @media (min-width: 1100px) {
    display: none;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
