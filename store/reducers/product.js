import {
  CREATE_PRODUCT,
  CREATE_PRODUCT_FAILED,
  GET_MORE_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  RESET_DETAIL_STATE,
  SET_LOADING,
} from '../actions/product';

const initState = {
  productList: [],
  isLoading: false,
  moreLoading: false,
  isEndList: false,
  currentPage: 1,

  product: {},
  isLoadingDetail: true,

  isSent: false,
};

export default function ProductRedcuder(state = initState, action) {
  const {type, payload} = action;

  switch (type) {
    case SET_LOADING:
      if (state.currentPage <= 1) {
        return {...state, isLoading: true};
      } else {
        return {...state, moreLoading: true};
      }

    case GET_PRODUCTS: {
      const products = payload;

      return {
        ...state,
        productList: [...state.productList, ...products],
        isLoading: false,
        moreLoading: false,
        currentPage: state.currentPage + 1,
        isEndList: products.length == 0,
      };
    }

    case GET_PRODUCT_BY_ID: {
      const product = payload;

      return {
        ...state,
        isLoadingDetail: false,
        product: product,
      };
    }

    case CREATE_PRODUCT: {
      const product = payload;

      console.log(product);

      return {
        ...state,
        productList: [...state.productList, product],
        isSent: true,
      };
    }

    case CREATE_PRODUCT_FAILED: {
      return {
        ...state,
        isSent: false,
      };
    }

    case RESET_DETAIL_STATE:
      return {
        ...state,
        product: {},
        isLoadingDetail: true,
      };
    default:
      return state;
  }
}
