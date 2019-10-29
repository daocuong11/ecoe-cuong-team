import React from "react";
import Wrapper, { ModalStyle } from "./Wrapper";
// import Header from "./Header";
// import StandardContainer from "./StandardContainer";

const withModalFilterMobile = Wrappedcomponent=>{
    return class ModalFilterMobile extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                open: false,
                closePopup : this.closePopup.bind(this),
                showPopup : this.showPopup.bind(this)
            }
        }
        closePopup(e) {
            this.setState({
                open: false
            });
        }
        showPopup(show) {
            this.setState({
                open: show
            })
        }
    
        handleClick=()=>{
            this.showPopup(true);
        }
        
        render() {
            return (
                <Wrapper>
                    <ModalStyle modal open={this.state.open} lockScroll={true}>
                        <Wrappedcomponent data={this.state} {...this.props} ></Wrappedcomponent>
                    </ModalStyle>
                </Wrapper>
            )
        }
    }
}




export default withModalFilterMobile;