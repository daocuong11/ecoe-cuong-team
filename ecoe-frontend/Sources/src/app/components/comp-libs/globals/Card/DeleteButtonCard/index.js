import React from "react";
import {Mutation} from "react-apollo";
import {DELETE_PRODUCT} from "./mutation";
import LButtonCard from '../../Buttons/LButtonCard';

import {GET_PRODUCTS} from "globalComponents/GridCard/GridCardGQ/query";
const EnableButtonCard = (props)=>{
    return(
    <Mutation mutation={DELETE_PRODUCT} refetchQueries={()=>{
        return [{
            query:GET_PRODUCTS
        }
        ]
    }}>
        {
            (deleteProduct)=>(                
                <LButtonCard label="Xóa"
                    onClick={e=>{
                    e.preventDefault();
                    console.log("Xóa nó", props.Product.id);
                    deleteProduct({variables:{id:props.Product.id}});
                }
                }>
                </LButtonCard>
            )
        }
    </Mutation>
)}

export default EnableButtonCard;