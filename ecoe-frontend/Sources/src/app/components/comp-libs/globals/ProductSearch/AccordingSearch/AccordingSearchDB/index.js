import React from "react";
import SearchCriticalRP  from "apolloComponents/SearchCriticalRP.js";
import AccordingSearch from "../";

const AccordingSearchDB =(props)=>(
    <SearchCriticalRP  
        render={
            data=>( 
                <AccordingSearch filterMobile={props.filterMobile} openModalButton={props.openModalButton} accordionButton={props.accordionButton} selecting={props.selecting} data={data} {...props}></AccordingSearch>
            )
        } 
    />
)
export default AccordingSearchDB;