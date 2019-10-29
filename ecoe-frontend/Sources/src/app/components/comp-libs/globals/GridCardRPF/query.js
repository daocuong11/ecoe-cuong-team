import gql from "graphql-tag";


export const GET_PRODUCTS = gql`    
       query searchCritical($objSearch:String) {
    searchCritical(objSearch: $objSearch) {
      id,
      domainType,
      productType,
      isOwner,
      userId,
      isECOE,
      address,
      name,
      images{
        src,
        alt
      },
      utilities{
        beds,
        baths,
        areas,
        direction,
        balcons
      },
      basePrice,
      totalPrice,
      commission,
      status,
      contactPhone,
      likes,
      views,
      shareSocials,    
      numberOfUnits,
      projectArea,
      scale,    
      model,  
      isHightLight,
      broker {
        id
      },
      isEnable,
      isSharing,
      isReceive      
    }
  }`;