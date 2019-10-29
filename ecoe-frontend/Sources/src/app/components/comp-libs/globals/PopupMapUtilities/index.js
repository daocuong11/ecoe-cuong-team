import React from "react";
import Wrapper, { PopupStyle, ButtonClose } from "./Wrapper";
import MapUtilities from "../MapUtilities";

class PopupMapUtilities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
        this.showPopup = this.showPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }
    showPopup(id, e) {
        this.setState({
            open: true,
        });
    }
    closePopup(e) {
        this.setState({
            open: false
        });
    }


    render() {
        return (
            <Wrapper>
                <PopupStyle modal open={this.state.open} lockScroll={true}>
                        <ButtonClose onClick={this.closePopup}>&times;</ButtonClose>
                        <MapUtilities isPopup={true} utilities={this.props.utilities}/>
                </PopupStyle>
            </Wrapper>
        )
    }
}


export default PopupMapUtilities;