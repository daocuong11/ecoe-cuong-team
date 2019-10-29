"use strict";
const productConstant_1 = require("../const/productConstant");
const enumDeftype = `
enum BRANCH_TYPE {
  ${productConstant_1.MS}
  ${productConstant_1.SD_BO}
  ${productConstant_1.SD_FO}
}

enum PRODUCT_STATUS {
  ${productConstant_1.PRJ_OPENING_SOON}
  ${productConstant_1.PRJ_OPENING}
  ${productConstant_1.PRJ_SOLD}
  ${productConstant_1.HM_OPENING}
  ${productConstant_1.HM_SOLD}
}

enum PRODUCT_TYPE {
  ${productConstant_1.PRODUCT_TYPE_HOUSE} 
  ${productConstant_1.PRODUCT_TYPE_PROJECT}
}

enum AUTHOR_CODE {
  a
}

enum BATHS {
  a
}

enum BEDS {
  a
}

enum DIRECTION {
  a
}

enum JURIDICAL {
  ${productConstant_1.LAND_DEED}
  ${productConstant_1.CONTRACT}
}

enum OWN_TIME {
  ${productConstant_1.FIFTY_YEAR}
  ${productConstant_1.FOREVER}
}

enum HANDOVER_STATUS{
  ${productConstant_1.ROUGH_HANDOVER}
  ${productConstant_1.BASIC_HANDOVER}
  ${productConstant_1.FULL_FURNITURE_HANDOVER}
}

enum UTILITY {
  ${productConstant_1.FULL_FURNITURE}
  ${productConstant_1.NEAR_SUPPERMARKET}
  ${productConstant_1.CONVENIENT_TRANSPORTATION}
  ${productConstant_1.RIVER_VIEW}
  ${productConstant_1.CITY_VIEW}
  ${productConstant_1.SMART_HOME}
  ${productConstant_1.NEAR_HOPITAL}
  ${productConstant_1.CROWDED}
  ${productConstant_1.GREEN_DESIGN}
  ${productConstant_1.CITY_CENTRAL}
}

enum CONFIG{
  APARTMENTTYPE, 
  CATALOGUE, 
  COMPANYROLE, 
  COMPLETEDSTATE, 
  COUNTRY, 
  EDITEDSTATUS, 
  FURNITUREGROUP, 
  LANDTYPE, 
  LEGALCERTIFICATION, 
  LEGALPERIOD, 
  MEDIATYPE, 
  NOTIFICATIONSTATUS, 
  NOTIFICATIONTYPE, 
  ORIENTATION, 
  PLACEMENTTYPE, 
  PROJECTSTATUS, 
  PROJECTTYPE, 
  PROPERTYTYPE, 
  RESOURCETYPE, 
  CITY
}

type pagination {
  pageIndex: Int,
  pageSize: Int,
  totalPage: Int
}

type orderBy {
  field: String,
  isASC: Boolean
}

type Image {
  src: String,
  alt: String
}

type ProductRespone {
  totalRecord: Int,
  hasMore: Boolean,
  products: [Product]
}

`;
module.exports = enumDeftype;
