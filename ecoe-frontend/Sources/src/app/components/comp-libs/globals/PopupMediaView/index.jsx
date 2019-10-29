import React from "react";
import Wrapper, { PopupStyle, ButtonClose } from "./Wrapper";
import LeftMenu from "./LeftMenu";
import ContainerPhotoBorder from "./ContainerPhotoBorder/index";
import FrameBorder from "./FrameBorder";
import { TYPE_360, TYPE_IMAGE, TYPE_VIDEO, MEDIA_MENU} from "constants/projectDetail";
import * as _ from "lodash";

class PopupMediaView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            activeLeftMenu: TYPE_IMAGE
        }
        this.showPopup = this.showPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    showPopup(key, e) {
        this.setState({
            open: true,
            activeLeftMenu: key,
            currentItem: _.first(_.filter(this.props.items,{key: key}))
        });
    }
    closePopup(e) {
        this.setState({
            open: false
        });
    }

    handleClick(itemCategory) {
        this.setState({
            activeLeftMenu: itemCategory.key,
            currentItem: _.first(_.filter(this.props.items,{key: itemCategory.key}))
        });
    }

    render() {
        return (
            
            <Wrapper>
                <PopupStyle modal open={this.state.open} lockScroll={true}>
                    <div>
                        <ButtonClose onClick={this.closePopup}>&times;</ButtonClose>
                        <LeftMenu active={this.state.activeLeftMenu} menuItems={MEDIA_MENU} onClick={this.handleClick} />
                        {
                            this.state.activeLeftMenu === TYPE_IMAGE
                                ? <ContainerPhotoBorder items={_.filter(this.props.items,{type: TYPE_IMAGE})} />
                                : <FrameBorder item={this.state.currentItem} fullSize={this.state.activeLeftMenu !== TYPE_VIDEO} />
                        }

                    </div>
                </PopupStyle>
            </Wrapper>
        )
    }
}


export default PopupMediaView;