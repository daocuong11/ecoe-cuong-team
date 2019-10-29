import React from "react";
import {Mutation} from "react-apollo";
import {UPDATE_PRODUCT_ISSHARING} from "./mutation";
import RButtonCard from '../../Buttons/RButtonCard';
import { ACT_SHARE_MS, ACT_SHARE_STATUS } from "constants/labelActionForCard";

const ShareMSButtonCard = (props)=>{    
    let {isSharing, id} = props.Product;
    var label = !isSharing ? ACT_SHARE_MS : ACT_SHARE_STATUS;
    var styleButton = !isSharing ? "1" : "2";

    return(
    <Mutation mutation={UPDATE_PRODUCT_ISSHARING} >
        {
            (updateProductIsSharing,{data})=>(                
                <RButtonCard label={label}
                    type={styleButton}
                    onClick={e=>{
                    e.preventDefault();
                    updateProductIsSharing({variables:{id:id, isSharing:!isSharing}});
                }
                }>
                </RButtonCard>
            )
        }
    </Mutation>
)}

export default ShareMSButtonCard;