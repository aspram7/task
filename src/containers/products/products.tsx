import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Styled from "./products.styled";
import ProductItem, { IProductItem } from "components/productItem/productItem";
import { getProductsAction, onLikedAction, onSortAction } from "store/products/actions";
import Icon from "assets/images/icon.svg";

const sortList = [
  { id: 0, value: "A to Z" },
  { id: 1, value: "Z to A" },
  { id: 2, value: "Price: Low to high" },
  { id: 3, value: "Price: High to low" },
];

interface ISortItem {
  id: number;
  value: string;
}

const Products = () => {
  const dispatch = useDispatch();
  const { data = [] } = useSelector((state: any) => state.products);
  const [sort, setSort] = useState(sortList[0]);
  const [sortListOpen, setSortListOpen] = useState(false);
  const sortListRef = useRef(null as any);

  useEffect(() => {
    dispatch(getProductsAction() as any);
    function outsideClick(event: any) {
      if (!sortListRef.current?.contains(event.target)) {
        setSortListOpen(false);
      }
    }
    window.addEventListener("click", outsideClick);
    return () => {
      window.removeEventListener("click", outsideClick);
    };
  }, []);

  const onLike = (id: string) => {
    dispatch(onLikedAction(id) as any);
  };

  const onSortProducts = () => {
    setSortListOpen(!sortListOpen);
  };

  const onSortChange = (sortItem: ISortItem) => {
    setSort(sortItem);
    dispatch(onSortAction(sortItem.id) as any);
  };

  return (
    <Styled.Products>
      <Styled.ShownItems>
        <p>
          {data.length} {window.innerWidth >= 1100 ? "listings shown" : "Items"}
        </p>
        <Styled.Sort>
          <Styled.SortBy>Sort by:</Styled.SortBy>
          <Styled.SortName ref={sortListRef} onClick={onSortProducts}>
            <p>{sort.value}</p>
            <Styled.Icon src={Icon} theme={{ active: sortListOpen }} />
            {sortListOpen && (
              <Styled.SortList>
                {sortList.map((sortItem: ISortItem) => {
                  return (
                    <Styled.SortItem key={sortItem.id} onClick={() => onSortChange(sortItem)}>
                      {sortItem.value}
                    </Styled.SortItem>
                  );
                })}
              </Styled.SortList>
            )}
          </Styled.SortName>
        </Styled.Sort>
      </Styled.ShownItems>
      <Styled.ProductWrapper>
        {data.map((product: IProductItem) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              picture={product.picture}
              name={product.name}
              description={product.description}
              price={product.price}
              isLiked={product.isLiked}
              onClick={onLike}
            />
          );
        })}
      </Styled.ProductWrapper>
    </Styled.Products>
  );
};

export default Products;
