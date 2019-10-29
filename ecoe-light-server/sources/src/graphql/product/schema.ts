const productTypedef = `
extend type Query {
  productList: [Product],
  getProducts: [Product],
  getProductById(id:Int):Product,
  getProductsByIds(ids: [Int]):[Product],
}

extend type Mutation{
  updateProduct(product: ProductInput): Product,
  updateProductIsEnable(id:Int,isEnable :Boolean): Product,
  deleteProduct(id:Int):String
} 

type Product {
  id: Int,
  domainType: BRANCH_TYPE,
  productType: PRODUCT_TYPE,
  isOwner: Boolean,
  userId: Int,
  isECOE: Boolean,
  address: String,
  name: String,
  images: [Image],
  utilities: Utilities,
  basePrice: String,
  totalPrice: String,
  commission: String,
  status: PRODUCT_STATUS,
  contactPhone: String,
  likes: Int,
  views: Int,
  shareSocials: String, 
  investor: [Investor]
  numberOfUnits: String,
  projectArea: String,
  scale: String,    
  model: String,  
  isHightLight: Boolean,
  broker: Broker,
  isEnable: Boolean,
  isSharing: Boolean,
  isReceive: Boolean       
}

type Utilities {
  beds: String,
  baths: String,
  areas: String,
  direction: String,
  balcons: String
}

input ProductInput{
  name:String,
}

input ImageInput{
  src: String,
  alt: String
}

input UtilitiesInput {
  beds: String,
  baths: String,
  areas: String,
  direction: String,
  balcons: String
}

input ProductSummary { 
  total: Int,
  priceFrom: Float,
  priceTo: Float,
  totalBedroom: Int, 
  totalBathroom: Int,
  carpetArea: Float,
  builtUpArea: Float
}

input ProjectUnit {
  image: ImageInput,
  projectUnitNm: String,
  status: PRODUCT_STATUS,
  keepingFee: Float,
  totalLift: Int,
  totalFloor: Int,
  totalBasement: Int,
  totalParking: Int,
  totalApartment: Int,
  totalOfficetel: Int,
  totalShophouse: Int,
  salesDate: String,
  handoverDate: String,
  productSummaries: [ProductSummary]
}

input ProjectInput{
  id: Int,
  name: String,
  productType: PRODUCT_TYPE,

  fromPrice: Float,
  toPrice: Float,
  commission: Float,
  acreageFromPrice: Float,
  acreageToPrice: Float,

  mainImage: ImageInput,
  generalImage: [ImageInput],
  groundImage: [ImageInput],
  houseImage: [ImageInput],
  positionImage: [ImageInput],
  image360: [ImageInput],
  ytLink: String,
  strView: String,
  link3D: String,

  status: PRODUCT_STATUS,
  address: String,
  city: String,
  district: String,
  ward: String,

  investorNm: String,
  investorId: String,
  investmentTotal: Float,
  acreageTotal: Float,
  treeDensity: Float,
  buildingDensity: Float,
  startDate: String,
  handoverDate: String,
  totalApartment: Int,
  totalOfficetel: Int,
  totalShophouse: Int,
  totalVilla: Int,
  totalTownHouse: Int,
  totalGround: Int,
  juridical: JURIDICAL,
  ownTime: OWN_TIME,
  managementFee: Float,
  parkingBrikeFee: Float,
  parkingCarFee: Float,
  utilities: [UTILITY],
  other: [String],
  projectUnits: [ProjectUnit]
}

`;

export default productTypedef