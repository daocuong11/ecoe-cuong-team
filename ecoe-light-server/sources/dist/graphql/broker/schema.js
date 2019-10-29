"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const brokerTypedef = `
  extend type Query {
    getBrokers: [Broker]
  }

  type Broker{
    id: Int,
    brokerAvatar: String,
    brokerName: String,
    role: String,
    phone: String
  }

  input BrokerInput{
    brokerAvatar: String,
    brokerName: String
  }
`;
exports.default = brokerTypedef;
