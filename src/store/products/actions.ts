import { Dispatch } from "redux";
import * as types from "./types";
import { getProducts } from "api";

export const getProductsAction = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: types.GET_PRODUCTS_REQUEST });
      const data = await getProducts();
      const products = data.slice(0, 24);

      dispatch({
        type: types.GET_PRODUCTS_SUCCESS,
        payload: products,
      });
    } catch (error) {
      dispatch({
        type: types.GET_PRODUCTS_ERROR,
        payload: error,
      });
    }
  };
};

export const searchProducts = (search: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: types.SEARCH_PRODUCTS,
      payload: search,
    });
  };
};

export const onLikedAction = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: types.LIKED_PRODUCT,
      payload: id,
    });
  };
};

export const onSortAction = (sortId: number) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: types.SORT_PRODUCTS,
      payload: sortId,
    });
  };
};
