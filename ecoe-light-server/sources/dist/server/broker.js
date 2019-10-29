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
class BrokerAPI extends apollo_datasource_rest_1.RESTDataSource {
    willSendRequest(request) {
        request.headers.set('content-type', 'Application/json');
    }
    constructor() {
        super();
        this.baseURL = 'https://apidev.pi-city.com/productservice/';
    }
    getBrokers() {
        return __awaiter(this, void 0, void 0, function* () {
            let brokers = [
                {
                    id: 1,
                    name: "Nguyễn Phúc Chu",
                    avatarUrl: "https://i.imgur.com/3McFm3K.png",
                    role: "",
                    phone: "0909123456"
                },
                {
                    id: 2,
                    name: "Phạm Phú Thứ",
                    avatarUrl: "https://i.imgur.com/3McFm3K.png",
                    role: "",
                    phone: "0909123457"
                },
                {
                    id: 3,
                    name: "Nguyễn Xuân Phúc",
                    avatarUrl: "https://i.imgur.com/3McFm3K.png",
                    role: "",
                    phone: "0909123458"
                },
                {
                    id: 4,
                    name: "Nguyễn Tấn Dũng",
                    avatarUrl: "https://i.imgur.com/3McFm3K.png",
                    role: "",
                    phone: "0909123450"
                },
                {
                    id: 5,
                    name: "Hồ Chí Minh",
                    avatarUrl: "https://i.imgur.com/3McFm3K.png",
                    role: "",
                    phone: "0909123459"
                },
            ];
            return brokers;
        });
    }
}
module.exports = BrokerAPI;
