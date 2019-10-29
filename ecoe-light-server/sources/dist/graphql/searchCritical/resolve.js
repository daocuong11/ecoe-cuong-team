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
const sectionResult_1 = require("../../data/sectionResult");
const productConstant_1 = require("../../const/productConstant");
let totalRecord = 100;
const searchCriticalResolver = {
    Query: {
        searchCritical: (_source, { objSearch }, { dataSources }, info) => __awaiter(this, void 0, void 0, function* () {
            info.cacheControl.setCacheHint({ maxAge: 5 });
            var data = JSON.parse(objSearch);
            let tmpProducts = products_1.Products;
            if (data.productType === productConstant_1.PRODUCT_TYPE_PROJECT) {
                tmpProducts = tmpProducts.map(e => {
                    return Object.assign({}, e, { productType: productConstant_1.PRODUCT_TYPE_PROJECT });
                });
            }
            else {
                tmpProducts = tmpProducts.map(e => {
                    return Object.assign({}, e, { productType: productConstant_1.PRODUCT_TYPE_HOUSE });
                });
            }
            if (data.domainType === productConstant_1.SD_FO) {
                tmpProducts = tmpProducts.map(e => {
                    return Object.assign({}, e, { domainType: productConstant_1.SD_FO });
                });
            }
            else if (data.domainType === productConstant_1.MS) {
                tmpProducts = tmpProducts.map(e => {
                    return Object.assign({}, e, { domainType: productConstant_1.MS });
                });
            }
            else {
                tmpProducts = tmpProducts.map(e => {
                    return Object.assign({}, e, { domainType: productConstant_1.SD_BO });
                });
            }
            if (data.category !== null && data.category !== undefined) {
                tmpProducts = tmpProducts.map(e => {
                    let sData = data.category;
                    let userId = sData.userId || e.userId;
                    let isECOE = sData.isECOE || e.isECOE;
                    let isNewest = sData.isNewest || e.isNewest;
                    let isHighlight = sData.isHighlight || e.isHightLight;
                    return Object.assign({}, e, { userId,
                        isECOE,
                        isNewest,
                        isHighlight });
                });
            }
            let productRespone = {
                totalRecord: totalRecord,
                hasMore: true,
                products: tmpProducts
            };
            return productRespone;
        }),
        getHotArea: () => {
            return sectionResult_1.sectionResult.hotArea;
        },
        getHighlight: () => {
            return sectionResult_1.sectionResult.highlight;
        }
    },
};
exports.default = searchCriticalResolver;
