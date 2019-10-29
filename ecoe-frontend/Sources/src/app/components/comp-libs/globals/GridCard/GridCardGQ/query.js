import gql from "graphql-tag";

export const GET_PRODUCTS = gql`
{
    getProducts{
        id,
        productType,
        isOwner,
        isEnable,
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
        investor,
        numberOfUnits,
        projectArea,
        scale,        
        model,       
        broker{
          brokerAvatar,
          brokerName
        },
        isSharing,
        isReceive
    }
}
`;