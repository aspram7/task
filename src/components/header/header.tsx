import { useState, useEffect, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import * as Styled from "./header.styled";
import sigmaLogo from "../../assets/images/sigma-logo.svg";
import ellipse from "../../assets/images/ellipse.svg";
import searchIcon from "../../assets/images/search-icon.svg";
import { searchProducts } from "store/products/actions";

const Header1 = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(searchProducts(search) as any);
  }, [search]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };
  return (
    <div>
      <Styled.Header>
        <Styled.Menu>
          <Styled.MenuItem>Menswear</Styled.MenuItem>
          <Styled.MenuItem>Womenswear</Styled.MenuItem>
          <Styled.MenuItem>Everything Else</Styled.MenuItem>
        </Styled.Menu>
        <Styled.MobileMenu theme={{ open }} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </Styled.MobileMenu>
        <Styled.ImgWrapper>
          <img src={sigmaLogo} alt="Sigma logo" />
        </Styled.ImgWrapper>
        <Styled.Profile>
          <Styled.Search type="text" placeholder="Search" value={search} onChange={onChange} />
          <Styled.User>
            <img src={ellipse} alt="Ellipse" />
            <p>straightkilla187real</p>
          </Styled.User>
        </Styled.Profile>
        <Styled.MobileSearch src={searchIcon} alt="Search icon" />
      </Styled.Header>
    </div>
  );
};

export default Header1;
