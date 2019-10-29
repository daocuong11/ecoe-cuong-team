import React from "react";
import SearchCriticalRP  from "apolloComponents/SearchCriticalRP.js";
import ListingSearch from "../";

const ListingSearchDB =(props)=>(
    <SearchCriticalRP  render={data=>( <ListingSearch data={data} {...props}></ListingSearch>)} />
)
export default ListingSearchDB;