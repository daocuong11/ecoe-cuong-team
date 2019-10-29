const productTypedef = `
extend type Query {
  getDistricts(provinceId: Int): [District],
  getWards(districtId: Int): [Ward]
}

type Province {
  id: String,
  name: String
}

type District {
  id: String,
  name: String
}

type Ward {
  id: String,
  name: String
}
`;

export default productTypedef