import {
  createNewProduct,
  getProductById,
  getProducts,
} from '../../services/productService';

export const SET_LOADING = 'SET_LOADING';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const RESET_DETAIL_STATE = 'RESET_DETAIL_STATE';
export const CREATE_PRODUCT_FAILED = 'CREATE_PRODUCT_FAILED';

export const setLoading = () => {
  return {type: SET_LOADING};
};

export const fetchProduct = () => {
  return async (dispatch, state) => {
    try {
      const pageNumber = state().rootReducers.product.currentPage;
      const products = await getProducts(pageNumber);
      dispatch({type: GET_PRODUCTS, payload: products});
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchProductById = id => {
  return async (dispatch, state) => {
    try {
      const product = await getProductById(id);
      dispatch({type: GET_PRODUCT_BY_ID, payload: product});
    } catch (error) {
      console.log(error);
    }
  };
};

export const createProduct = product => {
  return async (dispatch, _) => {
    try {
      console.log(`create product ==> ${JSON.stringify(product, null, 2)}`);

      const newProduct = await createNewProduct(product);

      console.log(
        `create product newProduct ==> ${JSON.stringify(newProduct, null, 2)}`,
      );

      dispatch({type: CREATE_PRODUCT, payload: newProduct});
    } catch (error) {
      dispatch({type: CREATE_PRODUCT_FAILED});
      console.log(error);
    }
  };
};

export const resetDetailState = () => {
  return {type: RESET_DETAIL_STATE};
};
