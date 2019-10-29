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

export default investorTypedef