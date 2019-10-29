"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const searchCriticalTypedef = `
extend type Query {
  searchCritical(objSearch:String): ProductRespone,
  getHotArea: [sectionResult],
  getHighlight: [sectionResult],
}

type commonSearch {
  estateType: PRODUCT_TYPE,
  area: area,
  price: Int,
  status: PRODUCT_STATUS,
  author: AUTHOR_CODE
}

type area {
  wards: [String],
  districts: [String],
  city: [String],
}

type advanceSearch {
  investors: [String],
  acreage: acreage,
  baths: [BATHS],
  beds: [BEDS],
  directions: [DIRECTION],
  juridical: [JURIDICAL]
}

type sectionSearch {
  userId: Int!,
  isNewest: Boolean!,
  isEcoe: Boolean!,
  isHighlight: Boolean!
}

type acreage{
  min: Int,
  max: Int
}

type sectionResult {
  name: String,
  total: Int
}

`;
exports.default = searchCriticalTypedef;
const json = `
freeText: String!,
productType: String!,
domainType: BRANCH_TYPE,
commonSearch: JSON,
advanceSearch: JSON,
sectionSearch: JSON,
orderBy: JSON,
pagination: JSON
`;
