import { GraphQLInt, GraphQLBoolean, GraphQLID, GraphQLString, GraphQLObjectType, GraphQLNonNull } from "graphql";
export const ImageType = new GraphQLObjectType({
    name: "Image",
    description: "Image type define",
    fields: () => (
        {
            src: {
                type: GraphQLString
            },
            alt: {
                type: GraphQLString
            }
        }
    )

})
const UtilitiesType = new GraphQLObjectType({
    name: "Utilities",
    description: "Utilities type define",
    fields: () => ({
        beds: { type: GraphQLString },
        baths: { type: GraphQLString },
        areas: { type: GraphQLString },
        direction: { type: GraphQLString },
        balcons: { type: GraphQLString },
    }
    )

});

export const BrokerType = new GraphQLObjectType({
    name: "Broker",
    description: "Broker type define",
    fields: () => ({
        brokerAvatar: { type: GraphQLString },
        brokerName: { type: GraphQLString },
    })
});

export const ProductType= new GraphQLObjectType({
    fields:()=>({
        id: { type: GraphQLInt },
        productType: { type: GraphQLString },
        isOwner: { type: GraphQLBoolean },
        isEnable: { type: GraphQLBoolean },
        address: { type: GraphQLString },
        name: { type: GraphQLString },
        images: { type: [ImageType] },
        utilities: { type: UtilitiesType },
        basePrice: { type: GraphQLString },
        totalPrice: { type: GraphQLString },
        commission: { type: GraphQLString },
        status: { type: GraphQLString },
        contactPhone: { type: GraphQLString },
        likes: { type: GraphQLString },
        views: { type: GraphQLString },
        shareSocials: { type: GraphQLString },
        investor: { type: GraphQLString },
        numberOfUnits: { type: GraphQLString },
        projectArea: { type: GraphQLString },
        scale: { type: GraphQLString },
        date: { type: GraphQLString },
        model: { type: GraphQLString },
        broker: { type: BrokerType },
        isSharing: { type: GraphQLBoolean },
        isReceive: { type: GraphQLBoolean }
    })
    
});

export default ProductType;