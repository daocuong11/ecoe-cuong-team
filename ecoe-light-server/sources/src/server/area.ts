import { baseAPI } from './baseService';

export class areaAPI extends baseAPI {
  constructor() {
    super("");
  }

  async getWards(districtId) {
    return (await this.getUrl(`http://172.16.100.99:5000/api/wards?districtId=${districtId}`)).map(e => {
      return {
        id : e.PrimaryKey,
        name: e.Name
      }
    });
  }

  async getDistricts(provinceId) {
    return (await this.getUrl(`http://172.16.100.99:5000/api/Districts?cityId=${provinceId}`)).map(e => {
      return {
        id : e.PrimaryKey,
        name: e.Name
      }
    });
  }
}






