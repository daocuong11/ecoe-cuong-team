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
const areaResolver = {
    Query: {
        getDistricts: (_, { provinceId }, { dataSources }) => __awaiter(this, void 0, void 0, function* () {
            return yield dataSources.areaAPI.getDistricts(provinceId);
        }),
        getWards: (_, { districtId }, { dataSources }) => __awaiter(this, void 0, void 0, function* () {
            return yield dataSources.areaAPI.getWards(districtId);
        }),
    }
};
exports.default = areaResolver;
