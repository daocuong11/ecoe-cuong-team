import React,{Component, Fragment} from "react";


class AppPageProvider extends Component{    
    
    componentWillMount(){
        if (
            this.props !== undefined &&
            this.props.data !== null &&
            this.props.data !== undefined
          ) {
            
            this.props.data.updateDomainType(this.props.domainType);
          }
    }
    render(){
        return(
            <Fragment  >
                {/* {this.props.children} */}
            </Fragment>           
        )
    }    
        
    
}

export default AppPageProvider;





