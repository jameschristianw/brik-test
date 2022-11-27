import Api from '../utils/api';

export const getProducts = async pageNumber => {
  return new Promise(async (resolve, reject) => {
    return await Api.get(`/product?page=${pageNumber}&limit=20`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getProductById = async id => {
  return new Promise(async (resolve, reject) => {
    return await Api.get(`/product/${id}`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const createNewProduct = async product => {
  return new Promise(async (resolve, reject) => {
    // console.log(`createNewProduct ==> ${JSON.stringify(product, null, 2)}`);

    return await Api.post(`/product`, product)
      .then(response => {
        console.log(JSON.stringify(response, null, 2));
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const updateProduct = product => {};

export const deleteProduct = id => {};
