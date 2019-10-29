import React,{Component} from "react";
import SearchCriticalRP  from "apolloComponents/SearchCriticalRP.js";
import ContainerSearchBorder from "../";

class ContainerSearchBorderDB extends Component{

    render(){

        return(
            <SearchCriticalRP 
                render={data=>(
                    <ContainerSearchBorder data={data} {...this.props}></ContainerSearchBorder>
                )}            
            ></SearchCriticalRP>
        )
    }

}
export default ContainerSearchBorderDB;