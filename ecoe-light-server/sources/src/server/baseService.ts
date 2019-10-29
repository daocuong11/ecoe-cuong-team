import { RESTDataSource } from 'apollo-datasource-rest';

export abstract class baseAPI extends RESTDataSource {
  modelName;

  willSendRequest(request) {
    request.headers.set('content-type', 'Application/json');
  }

  constructor(modelName) {
    super();
    this.baseURL = process.env.API_ENDPOINT;
    this.modelName = modelName; //this.constructor.name.replace('API', '');
  }

  async getAll() {
    let result = (await this.get(this.modelName)).data || {};
    return result;
  }

  async getById(id) {
    let result = (await this.get(`${this.modelName}/${id}`)).data || {};
    return result;
  }

  async update(model) {
    let result = (await this.put(`${this.modelName}/`, model)).data || {};
    return result;
  }

  async add(model) {
    let result = (await this.post(`${this.modelName}/`, model)).data || {};
    return result;
  }

  async deleteById(id) {
    let result = (await this.delete(`${this.modelName}/${id}`)).data || {};
    return result;
  }

  async getUrl(url){
    let result = (await this.get(url)) || {};
    return result;
  }
}