import React from 'react';
import PropTypes from 'prop-types';
import SlickImageProduct from '../SlickImageProduct';
import CategoryViewCarousel from './CategoryViewCarousel';
import Wrapper, { WrapperCategory, WrapperButtons, WrapperFooter,WrapperIconPhoto } from './Wrapper';
import { Icon360, IconVideo, Icon3DView, IconStreetView, IconPhoto } from "../../../elements/Icon";
import PopupMediaView from '../PopupMediaView';
import * as _ from "lodash";
import { TYPE_360, TYPE_IMAGE, TYPE_VIDEO} from "constants/projectDetail";

const getImages =(items,isMobile)=>{
    if(isMobile){
        let newArr =[];
        items = _.filter(items, {type: TYPE_IMAGE})
        _.map(items,(item)=>{
            newArr = newArr.concat(item.data)
        });         
        return newArr;
    }
    else{
        return _.first(items).data
    }
};


class MediaView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: _.filter(this.props.items, {type: TYPE_IMAGE}), 
            currentItem: _.first(this.props.items)
        }
        this.handleClick = this.handleClick.bind(this);
        this.showPopup = this.showPopup.bind(this);

        this.refPopupMediaView = React.createRef();
        this.refImageProduct = React.createRef();
    }

    handleClick = function (item, e) {
        this.refImageProduct.current.updateImages(item.data);
    }

    showPopup = function (catId, e) {
        this.refPopupMediaView.current.showPopup(catId);
    }

    render() {
        let images= getImages(_.get(this.props,'items'),true);
        return (
            <Wrapper>
                <PopupMediaView ref={this.refPopupMediaView}  items={this.props.items} />
                <SlickImageProduct ref={this.refImageProduct} autoSize={true} images={images} onClickViewAll={this.showPopup.bind(this, TYPE_IMAGE)} isShowButton />
                <WrapperFooter>
                    <WrapperCategory>
                        <CategoryViewCarousel items={this.state.items} onClick={this.handleClick} />
                    </WrapperCategory>
                    <WrapperButtons>
                        <WrapperIconPhoto> 
                            <IconPhoto type={3} height={50} heightMobile={40} onClick={this.showPopup.bind(this, TYPE_IMAGE)} fill="#00837b"/>
                        </WrapperIconPhoto>                      
                        <Icon360 type={3} height={50} heightMobile={40}  onClick={this.showPopup.bind(this, TYPE_360)} />
                        <IconVideo type={3} height={50} heightMobile={40}  onClick={this.showPopup.bind(this, TYPE_VIDEO)} />
                        <Icon3DView type={3} height={50} heightMobile={40}  disabled />
                        <IconStreetView type={3} height={50} heightMobile={40}  disabled />
                    </WrapperButtons>
                </WrapperFooter>
            </Wrapper>
        );
    }
}

MediaView.propTypes = {
    categoryItem: PropTypes.array,
};

export default MediaView;