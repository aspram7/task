import * as types from "./types";

const initialState = {
  originalData: [],
  data: [],
  loading: false,
  error: null,
};

interface IActionType {
  type: string;
  payload: any;
}

const sortHelper = [
  (a: any, b: any) => a.name.localeCompare(b.name),
  (a: any, b: any) => b.name.localeCompare(a.name),
  (a: any, b: any) => a.price - b.price,
  (a: any, b: any) => b.price - a.price,
];

function productsReducer(state = initialState, action: IActionType) {
  switch (action.type) {
    case types.GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        originalData: action.payload,
        data: action.payload,
        loading: false,
        error: null,
      };
    }
    case types.GET_PRODUCTS_ERROR: {
      return {
        ...state,
        originalData: [],
        data: [],
        loading: false,
        error: action.payload,
      };
    }
    case types.SEARCH_PRODUCTS: {
      const products = state.originalData.filter((product: any) => {
        const name = product.name.toLowerCase();
        const description = product.description.toLowerCase();
        const search = action.payload.toLowerCase();

        return name.includes(search) || description.includes(search);
      });
      return {
        ...state,
        data: products,
      };
    }
    case types.LIKED_PRODUCT: {
      const products = state.originalData.map((product: any) => {
        if (product.id === action.payload) return { ...product, isLiked: !product.isLiked };
        return product;
      });
      return {
        ...state,
        originalData: products,
        data: products,
      };
    }
    case types.SORT_PRODUCTS: {
      const products = [...state.originalData].sort(sortHelper[action.payload]);

      return {
        ...state,
        originalData: products,
        data: products,
      };
    }
    default:
      return state;
  }
}

export default productsReducer;
