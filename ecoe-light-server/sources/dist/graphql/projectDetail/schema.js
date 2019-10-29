"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const projectDetailTypedef = `
extend type Query {
  getProjectById(id:Int): [ProjectDetail],
}

type ProjectDetail {
    id: Int,
    domainType: BRANCH_TYPE,
    productType: PRODUCT_TYPE,
    name: String,
    investFun : Float,
    totalArea: Int,
    investorNm: String,
    treeDensity: Int,
    builtDensity: Int,
    startDate: String,
    endDate: String,      
    fromPrice: Float,
    toPrice: Float,
    commission: String,
    firstOrientation: String,
    secondOrientation: String,
    floorNumber: Float,
    block: String,
    highCeilings: Float,
    unitName: String,
    area: Float,
    lenght: Float,
    width: Float
    numBedRoom: Int,
    numBathRoom: Int
    haveMezzanine: Boolean,
    haveBasement: Boolean,
    address: String,
    city: String
    district: String,
    ward: String,
    estateType: String,
    juridical: String,
    status: String,
    deliveryStatus: String,
    ownTime: String, 
    
    
    totalTower: Int,
    totalFloor: Int,
    totalElevator: Int,

    totalApartment: Int,
    totalOfficetel: Int,
    totalShophouse: Int,
    totalVilla: Int,
    totalTownHouse: Int,
    totalGround: Int,
    totalParkingLot: Int,
    
    numOfYearsWarranty: Float,
    managementFee: Float,
    maintenanceFee: Float,
    parkingFee: Float,
    tranferFee: Float,
    keepingFee: Float,
    advantagesProject: [CommonData],
    utilities: [CommonData],
    media:[Media],
    investorDocuments:[CommonData],
    internalUtilities: [CommonData],
    cooperationUnit: [CommonData],
    investor: InvestorData,
    implemented_projects: String,
    facilities: FacilitiesData,

    publicDate: String,
    totalView: Int,
    totalLike: Int,
    codeProject: String,
    projectUnits: [ProjectUnits]
}

type ProjectUnits{
    id: Int,
    type: String,
    images: String,
    projectUnitNm: String,
    status: String,
    keepingFee: Float,
    totalBasement: Float,
    totalFloor: Float,
    totalElevator: Float,
    totalParking: Float,
    totalApartment: Float,
    totalOfficetel: Float,
    totalShophouse: Float,
    startDate: String,
    endDate: String,
    acreage: Float,
    realAcreage: Float,
    totalAcreage: Float,
    buildingLine: Float,
    projectSummaries: [ProjectSummaries]
}

type ProjectSummaries{
    id: Int,
    groundImages: String,
    estateType: String,
    total: Float,
    priceFrom: Float,
    priceTo: Float,
    totalBedroom: Int,
    totalBathroom: Int,
    carpetArea: Float,
    builtUpArea: Float
}

type FacilitiesData{
    interior: [CommonData],
    internalUtilities: [CommonData],
}

type InvestorData{
    name: String,
    type: String,
    experience: Float,
    website: String,
    image: String,
}

type CommonData{
    id: Int,
    type: String,
    role_name: String,
    name: String,
    icon: String,
    distance: String,
    url: String,
    data: [CommonData]
}

type Media{
    key: String,
    name: String,
    type: String,
    data:[MediaData]
   
}
type MediaData{
    src: String,
    thumb: String,
    alt: String
}
`;
exports.default = projectDetailTypedef;
