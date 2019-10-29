import React,{Component} from "react";
import SearchCriticalRP  from "apolloComponents/SearchCriticalRP.js";
import ProjectTypeSearch from "../";

class ProjectTypeSearchDB extends Component{
    render(){
        return(
            <SearchCriticalRP 
                render={data=>(
                    <ProjectTypeSearch data={data} {...this.props}></ProjectTypeSearch>
                )}            
            ></SearchCriticalRP>
        )
    }
}

export default ProjectTypeSearchDB;