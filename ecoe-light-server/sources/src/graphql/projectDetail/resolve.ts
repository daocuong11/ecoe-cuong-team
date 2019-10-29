
import { projectDetail as projects } from '../../data/projectDetail';

const projectDetailResolver = {
  Query: {
    getProjectById: async (_source, { id }, { dataSources }) => {
      return projects.filter(pro => pro.id === id);
    }
  }
};


export default projectDetailResolver