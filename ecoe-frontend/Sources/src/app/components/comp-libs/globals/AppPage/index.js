import React,{Component, Fragment} from "react";
import AppProviderRPF from "globalComponents/AppProvider";
import AppPageProvider from "./AppPageProvider";

class AppPage extends Component{
   
    render(){
        return(
            <AppProviderRPF render={data=>(
               
                 <AppPageProvider data={data} {...this.props}>                 
                 </AppPageProvider>
            )
                }>                
            </AppProviderRPF>
        )
    }    
        
    
}

export default AppPage;