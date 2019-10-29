import { brokers } from '../../data/brokers';

const brokerResolver = {
  Query: {
    getBrokers: () => {
      return brokers;
    },
  },
};

export default brokerResolver