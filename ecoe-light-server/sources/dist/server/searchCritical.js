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
const baseService_1 = require("./baseService");
class searchCriticalAPI extends baseService_1.baseAPI {
    constructor() {
        super("mutualspace-service");
    }
    getHighlightInfo(productType) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.modelName}/api/v1/mutualspace/project/${productType}/highlight-products-info`;
            return this.takeData(yield this.get(url)).map(e => {
                return {
                    key: e.key,
                    total: e.value,
                    name: e.name
                };
            });
        });
    }
    getHotAreaInfo(productType) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.modelName}/api/v1/mutualspace/project/${productType}/interested-area-info`;
            console.log(url);
            return this.takeData(yield this.get(url)).map(e => {
                return {
                    key: e.districtName,
                    total: e.total,
                    name: e.imageName
                };
            });
        });
    }
}
exports.searchCriticalAPI = searchCriticalAPI;
