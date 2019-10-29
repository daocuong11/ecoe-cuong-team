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
class areaAPI extends baseService_1.baseAPI {
    constructor() {
        super("");
    }
    getWards(districtId) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.getUrl(`http://172.16.100.99:5000/api/wards?districtId=${districtId}`)).map(e => {
                return {
                    id: e.PrimaryKey,
                    name: e.Name
                };
            });
        });
    }
    getDistricts(provinceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.getUrl(`http://172.16.100.99:5000/api/Districts?cityId=${provinceId}`)).map(e => {
                return {
                    id: e.PrimaryKey,
                    name: e.Name
                };
            });
        });
    }
}
exports.areaAPI = areaAPI;
