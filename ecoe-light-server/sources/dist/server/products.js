"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
class ProductsAPI extends apollo_datasource_rest_1.RESTDataSource {
    willSendRequest(request) {
        request.headers.set('content-type', 'Application/json');
    }
    constructor() {
        super();
        this.baseURL = 'https://apidev.pi-city.com/productservice/';
    }
    getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`product/findAll`);
        });
    }
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`product/${id}`);
        });
    }
    updateProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.put(`product/`, product);
        });
    }
    addProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.post(`product/`, product);
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delete(`product/${id}`);
        });
    }
}
module.exports = ProductsAPI;
