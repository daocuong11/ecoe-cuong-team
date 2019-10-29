import React,{Component} from "react";
import SearchCriticalRP  from "apolloComponents/SearchCriticalRP.js";
import TypeSearchDropdown from "../";

class TypeSearchDropdownDB extends Component{
    render(){
        return(
            <SearchCriticalRP 
                render={data=>(
                    <TypeSearchDropdown data={data} {...this.props}></TypeSearchDropdown>
                )}            
            ></SearchCriticalRP>
        )
    }
}

export default TypeSearchDropdownDB;