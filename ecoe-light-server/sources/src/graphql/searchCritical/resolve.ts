import { Products as products } from '../../data/products';
import { sectionResult } from '../../data/sectionResult';
import { PRODUCT_TYPE_HOUSE, PRODUCT_TYPE_PROJECT, MS, SD_FO, SD_BO } from '../../const/productConstant';

let totalRecord = 100;
const searchCriticalResolver = {
  Query: {
    searchCritical: async (_source, { objSearch }, { dataSources }, info) => {
      info.cacheControl.setCacheHint({ maxAge: 5 });
      var data = JSON.parse(objSearch);

      let tmpProducts = products;

      if (data.productType === PRODUCT_TYPE_PROJECT) {
        tmpProducts = tmpProducts.map(e => {
          return { ...e, productType: PRODUCT_TYPE_PROJECT };
        });
      } else {
        tmpProducts = tmpProducts.map(e => {
          return { ...e, productType: PRODUCT_TYPE_HOUSE };
        });
      }

      if (data.domainType === SD_FO) {
        tmpProducts = tmpProducts.map(e => {
          return { ...e, domainType: SD_FO };
        });
      } else if (data.domainType === MS) {
        tmpProducts = tmpProducts.map(e => {
          return { ...e, domainType: MS };
        });
      } else {
        tmpProducts = tmpProducts.map(e => {
          return { ...e, domainType: SD_BO };
        });
      }

      if (data.category !== null && data.category !== undefined) {
        tmpProducts = tmpProducts.map(e => {
          let sData = data.category;
          let userId = sData.userId || e.userId;
          let isECOE = sData.isECOE || e.isECOE;
          let isNewest = sData.isNewest || e.isNewest;
          let isHighlight = sData.isHighlight || e.isHightLight;

          return {
            ...e,
            userId,
            isECOE,
            isNewest,
            isHighlight,
          };

        });
      }

      let productRespone = {
        totalRecord: totalRecord,
        hasMore: true,
        products: tmpProducts
      }

      return productRespone;
    },
    getHotArea: () => {
      return sectionResult.hotArea;
    },
    getHighlight: () => {
      return sectionResult.highlight;
    }
  },
};


export default searchCriticalResolver