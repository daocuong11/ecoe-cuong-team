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

export default brokerTypedef;