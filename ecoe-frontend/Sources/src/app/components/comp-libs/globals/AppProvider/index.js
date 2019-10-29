import React,{Component, Fragment} from "react";
import { withApollo } from "react-apollo";
import {query} from "globalComponents/Banner";
class AppProviderRPF extends Component{
    constructor(props){
        super(props)
        this.state={
            updateDomainType: this.updateDomainType.bind(this)
        }
    }
    updateDomainType(value){
        this.props.client.writeData({data:{
            domainType: value
        }
       //console.log(this.props.client);
    })
    }
    render(){
        return(
            <Fragment>
                {this.props.render(this.state)}
            </Fragment>
        )
    }    
        
    
}
const withAppProvider = withApollo(AppProviderRPF);
export default withAppProvider;