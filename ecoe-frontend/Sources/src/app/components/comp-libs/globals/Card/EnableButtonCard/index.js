import React from "react";
import {Mutation} from "react-apollo";
import {UPDATE_PRODUCT_ISENABLE} from "./mutation";
import LButtonCard from '../../Buttons/LButtonCard';
import { ACT_HIDDEN, ACT_SHOW } from "constants/labelActionForCard";

const EnableButtonCard = (props)=>{    
    let {isEnable, id} = props.Product;
    var label = isEnable? ACT_HIDDEN: ACT_SHOW;
    
    return(
    <Mutation mutation={UPDATE_PRODUCT_ISENABLE} >
        {
            (updateProductIsEnable,{data})=>(                
                <LButtonCard label={label}
                    onClick={e=>{
                    e.preventDefault();
                    updateProductIsEnable({variables:{id:id, isEnable:!isEnable}});
                }
                }>
                </LButtonCard>
            )
        }
    </Mutation>
)}

export default EnableButtonCard;