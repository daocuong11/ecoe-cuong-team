"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const investorTypedef = `
  extend type Query {
    getInvestors: [Investor],
    getInvestorsByText(text:String):[Investor],
  }

  type Investor {
    id: Int, 
    avatarURL: String, 
    name: String, 
    description: String!
  }
`;
exports.default = investorTypedef;
