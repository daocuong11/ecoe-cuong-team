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
const products_1 = require("../../data/products");
const productResolver = {
    Query: {
        getProducts: (_source, { id }, { dataSources }) => __awaiter(this, void 0, void 0, function* () {
            // products = dataSources.productsAPI.getProducts();
            // return products;
            return products_1.Products.filter(pro => pro.id === id);
        }),
        productList: () => products_1.Products,
        getProductById: (_source, { id }, { dataSources }) => __awaiter(this, void 0, void 0, function* () {
            let result = yield dataSources.provincesAPI.getAll();
            console.log(result.data);
            return products_1.Products.filter(pro => pro.id == id)[0];
        }),
        getProductsByIds: (_source, { ids }, { dataSources }) => __awaiter(this, void 0, void 0, function* () {
            let result = [];
            for (let i = 0; i < ids.length; i++) {
                let tmpProduct = Object.assign({}, products_1.Products[i], { id: ids[i] });
                result.push(tmpProduct);
            }
            return result;
        })
    },
    Mutation: {
        updateProduct: (_source, { product }, { dataSources }) => __awaiter(this, void 0, void 0, function* () {
            return dataSources.productsAPI.updateProduct(product);
        }),
        updateProductIsEnable: (_source, { id, isEnable }, { dataSources }) => __awaiter(this, void 0, void 0, function* () {
            var product = yield dataSources.productsAPI.getProductById(id);
            product.isEnable = isEnable;
            return dataSources.productsAPI.updateProduct(product);
        }),
        deleteProduct: (_source, { id }, { dataSources }) => __awaiter(this, void 0, void 0, function* () {
            return dataSources.productsAPI.deleteProduct(id);
        })
    }
};
exports.default = productResolver;
