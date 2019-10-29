import React from "react";
import List from "./List";
import withSearchCritical from "./withSearchCritical";
import withProductType from "apolloComponents/withProductType";

const SearchCritical =(props)=>{
    return (<List mode={props.mode} data={props.data} loadMore={props.loadMore}></List>)
}

export default withProductType(withSearchCritical(SearchCritical));