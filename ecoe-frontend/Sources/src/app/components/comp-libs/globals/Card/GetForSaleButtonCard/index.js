import React from "react";
import {Mutation} from "react-apollo";
import {UPDATE_PRODUCT_ISRECEIVE} from "./mutation";
import RButtonCard from '../../Buttons/RButtonCard';
import { ACT_GET_FOR_SALE, ACT_UNGET_FOR_SALE } from "constants/labelActionForCard";

const GetForSaleButtonCard = (props)=>{    
    let {isReceive, id} = props.Product;
    var label = !isReceive ? ACT_GET_FOR_SALE : ACT_UNGET_FOR_SALE;
    var styleButton = !isReceive ? "1" : "2";

    return(
    <Mutation mutation={UPDATE_PRODUCT_ISRECEIVE} >
        {
            (updateProductIsReceive,{data})=>(                
                <RButtonCard label={label}
                    type={styleButton}
                    onClick={e=>{
                    e.preventDefault();
                    updateProductIsReceive({variables:{id:id, isReceive:!isReceive}});
                }
                }>
                </RButtonCard>
            )
        }
    </Mutation>
)}

export default GetForSaleButtonCard;