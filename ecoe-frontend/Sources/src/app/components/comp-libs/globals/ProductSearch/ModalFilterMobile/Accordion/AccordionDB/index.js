import React from "react";
import SearchCriticalRP  from "apolloComponents/SearchCriticalRP.js";
import According from "../";

const AccordingDB =(props)=>(
    <SearchCriticalRP  
        render={
            data=>( 
                <According filterMobile={props.filterMobile} openModalButton={props.openModalButton} accordionButton={props.accordionButton} selecting={props.selecting} data={data} {...props}></According>
            )
        } 
    />
)
export default AccordingDB;