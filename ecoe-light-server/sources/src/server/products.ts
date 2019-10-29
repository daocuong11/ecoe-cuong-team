import { RESTDataSource } from 'apollo-datasource-rest';

class ProductsAPI extends RESTDataSource{
    willSendRequest(request){
        request.headers.set('content-type','Application/json');
    }
    constructor() {
        super();
        this.baseURL = 'https://apidev.pi-city.com/productservice/';
      }
    async getProducts(){
        return this.get(`product/findAll`);        
    }
    async getProductById(id){
        return this.get(`product/${id}`);        
    }
    async updateProduct(product){
        return this.put(`product/`,product);        
    }
    async addProduct(product){
        return this.post(`product/`,product);        
    }
    async deleteProduct(id){
        return this.delete(`product/${id}`);        
    }
    
}

module.exports = ProductsAPI;