import React, { Fragment, Component } from "react";
import { SM, MD, LG_L, LG_P, XL, XXL } from "constants/resolutions";
import { withApollo } from "react-apollo";

class WindowResize extends Component {
    size = {
        height: window.innerHeight,
        width: window.innerWidth,
        orientation: "landscape"
    }
    constructor(props) {
        super(props)
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillMount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
    updateDimensions = () => {        
        this.size.width = window.innerWidth;
        this.size.height = window.innerHeight;
        this.size.orientation = window.matchMedia("(orientation: portrait)")?  "portrait": "landscape";       
        
        let resolution = this.getResolution(this.size);
        this.props.client.writeData(
            {
                data:{
                    resolution: resolution
                }
            })
    }

    getResolution = (size) => {      
        console.log(size.width < 480);  
        if(size.width < 480){
            return SM;
        }else if(size.width < 767){
            return MD;
        }
        else if(size.width < 1024 && size.orientation === "landscape"){
            return LG_L;
        }
        else if(size.width < 1024 && size.orientation === "portrait"){
            return LG_P;
        }
        else if(size.width < 1280){
            return XL;
        }
        else if(size.width > 1281){
            return XXL;
        }
        else{
            return XL;
        }        
    }
    render() {
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        )
    }
}
export default withApollo(WindowResize);