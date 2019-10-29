import React,{Component} from "react";
import SearchCriticalRP  from "apolloComponents/SearchCriticalRP.js";
import RangeSelect from "../";

class ListingSearchDB extends Component{
    render(){
        return(
            <SearchCriticalRP 
                render={data=>(
                    <RangeSelect filterMobile={this.props.filterMobile} data={data} {...this.props}></RangeSelect>
                )}            
            ></SearchCriticalRP>
        )
    }

}
export default ListingSearchDB;