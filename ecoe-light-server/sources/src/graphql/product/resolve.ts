
import { Products as products } from '../../data/products';

const productResolver = {
  Query: {
    getProducts: async (_source, { id }, { dataSources }) => {
      // products = dataSources.productsAPI.getProducts();
      // return products;

      return products.filter(pro => pro.id === id);
    },
    productList: () => products,
    getProductById: async (_source, { id }, { dataSources }) => {
      let result = await dataSources.provincesAPI.getAll();
      console.log(result.data);

      return products.filter(pro => pro.id == id)[0];
    },
    getProductsByIds: async (_source, { ids }, { dataSources }) => {
      let result = [];
      for (let i = 0; i < ids.length; i++) {
        let tmpProduct = { ...products[i], id: ids[i] };
        result.push(tmpProduct);
      }
      return result;
    }
  },
  Mutation: {
    updateProduct: async (_source, { product }, { dataSources }) => {
      return dataSources.productsAPI.updateProduct(product);
    },
    updateProductIsEnable: async (_source, { id, isEnable }, { dataSources }) => {
      var product = await dataSources.productsAPI.getProductById(id);
      product.isEnable = isEnable;
      return dataSources.productsAPI.updateProduct(product);
    },
    deleteProduct: async (_source, { id }, { dataSources }) => {
      return dataSources.productsAPI.deleteProduct(id);
    }
  }
};


export default productResolver