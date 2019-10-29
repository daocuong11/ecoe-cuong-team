"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const brokers_1 = require("../../data/brokers");
const brokerResolver = {
    Query: {
        getBrokers: () => {
            return brokers_1.brokers;
        },
    },
};
exports.default = brokerResolver;
