import React,{Component} from "react";
import SearchCriticalRP  from "apolloComponents/SearchCriticalRP.js";
import SeachBar from "../";

class SearchBarDB extends Component{

    render(){

        return(
            <SearchCriticalRP 
                render={data=>(
                    <SeachBar data={data} {...this.props}></SeachBar>
                )}            
            ></SearchCriticalRP>
        )
    }

}
export default SearchBarDB;