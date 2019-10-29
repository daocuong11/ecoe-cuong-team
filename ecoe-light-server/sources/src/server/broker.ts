import { RESTDataSource } from 'apollo-datasource-rest';


class BrokerAPI extends RESTDataSource {
  willSendRequest(request) {
    request.headers.set('content-type', 'Application/json');

  }
  constructor() {
    super();
    this.baseURL = 'https://apidev.pi-city.com/productservice/';
  }

  async getBrokers() {
    let brokers = [
      {
        id: 1,
        name: "Nguyễn Phúc Chu",
        avatarUrl: "https://i.imgur.com/3McFm3K.png",
        role: "",
        phone: "0909123456"
      },
      {
        id: 2,
        name: "Phạm Phú Thứ",
        avatarUrl: "https://i.imgur.com/3McFm3K.png",
        role: "",
        phone: "0909123457"
      },
      {
        id: 3,
        name: "Nguyễn Xuân Phúc",
        avatarUrl: "https://i.imgur.com/3McFm3K.png",
        role: "",
        phone: "0909123458"
      },
      {
        id: 4,
        name: "Nguyễn Tấn Dũng",
        avatarUrl: "https://i.imgur.com/3McFm3K.png",
        role: "",
        phone: "0909123450"
      },
      {
        id: 5,
        name: "Hồ Chí Minh",
        avatarUrl: "https://i.imgur.com/3McFm3K.png",
        role: "",
        phone: "0909123459"
      },

    ]

    return brokers;
  }
}

module.exports = BrokerAPI;