"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const investors = require('../../data/investor');
const investorResolver = {
    Query: {
        getInvestors: () => investors,
        getInvestorsByText: (_source, { text }) => {
            return investors.filter(inv => inv.name.indexOf(text) > -1);
        }
    },
};
exports.default = investorResolver;
