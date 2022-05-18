import * as Styled from "./productItem.styled";
import unliked from "assets/images/unliked.svg";
import liked from "assets/images/liked.svg";

export interface IProductItem {
  id: string;
  picture: string;
  name: string;
  description: string;
  price: string;
  isLiked: boolean;
  onClick: (id: string) => void;
}

const ProductItem: React.FC<IProductItem> = ({
  id,
  picture,
  name,
  description,
  price,
  isLiked,
  onClick,
}) => {
  return (
    <Styled.ProductItemContainer>
      <Styled.ImgWrapper>
        <Styled.Img src={picture} alt="product" />
        <Styled.LikeImage src={isLiked ? liked : unliked} alt="like" onClick={() => onClick(id)} />
      </Styled.ImgWrapper>
      <Styled.ProductInfo>
        <div>
          <Styled.ProductName>{name}</Styled.ProductName>
          <p>{description}</p>
        </div>
        <p>${price}</p>
      </Styled.ProductInfo>
    </Styled.ProductItemContainer>
  );
};

export default ProductItem;
