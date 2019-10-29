import { areaAPI } from './../../server/area';
const areaResolver = {
  Query: {
    getDistricts: async (_, { provinceId }, { dataSources }) => {
      return await dataSources.areaAPI.getDistricts(provinceId);
    },
    getWards: async (_, { districtId }, { dataSources }) => {
      return await dataSources.areaAPI.getWards(districtId);
    },
  }
};


export default areaResolver