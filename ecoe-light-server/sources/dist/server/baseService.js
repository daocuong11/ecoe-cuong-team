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
class baseAPI extends apollo_datasource_rest_1.RESTDataSource {
    willSendRequest(request) {
        request.headers.set('content-type', 'Application/json');
    }
    constructor(modelName) {
        super();
        this.baseURL = process.env.API_ENDPOINT;
        this.modelName = modelName; //this.constructor.name.replace('API', '');
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = (yield this.get(this.modelName)).data || {};
            return result;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = (yield this.get(`${this.modelName}/${id}`)).data || {};
            return result;
        });
    }
    update(model) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = (yield this.put(`${this.modelName}/`, model)).data || {};
            return result;
        });
    }
    add(model) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = (yield this.post(`${this.modelName}/`, model)).data || {};
            return result;
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = (yield this.delete(`${this.modelName}/${id}`)).data || {};
            return result;
        });
    }
    getUrl(url) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = (yield this.get(url)) || {};
            return result;
        });
    }
}
exports.baseAPI = baseAPI;
