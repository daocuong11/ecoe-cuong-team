import React from "react";
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import * as _ from "lodash";
import { ContentSection } from '../../Wrapper';
import { Return } from 'UIElement/Icon';

const Wrapper = styled.div`
`;

const WrapperContent= styled.div`
padding: 0 20px;
`;
const Item = styled(ContentSection)`
margin-bottom: 20px;
`;

const Img = styled.img`
width: 100%;
margin-top: 15px;
`;

const Header = styled.div`
    margin: 25px 0px 0px 20px;
    width: 31px;
    padding: 5px;
`;

const PopupStyle = styled(Popup)`
    width: 100% !important;
    height:100%;
    background:#FFF !important;
    border: none !important;
    padding:0 !important;
    z-index: 999999999;
`;

const InfoProperties = styled.div`
  position: relative;
  font-family: ${props => props.number && props.theme.fontTypeFace.fontQuicksand};
  color: ${props => props.hyperlink ? props.theme.textColor.primaryGreen : props.theme.textColor.primaryBlue};
  font-weight: ${props => props.theme.fontWeight.bold};
  margin-top: ${props => props.icon ? "35px" : "25px"};
  top: ${props => props.hyperlink && '25px'};
  &:before {
    position: absolute;
    top: ${props => props.icon ? "-30px" : "-20px"};
    left: 0;
    ${props => props.icon ?
    ('content: url(' + props.icon + ');') :
    ('content: "' + props.label + '";')
  }

    font-size: ${props => props.theme.fontSize.normal};
    font-weight: ${props => props.active ? props.theme.fontWeight.bold: props.theme.fontWeight.regular};
    color: ${props => props.active ? props.theme.textColor.primaryBlue: '#7a869a'};
    white-space: nowrap;
  }
`;

class PopupTypeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            item: _.get(props, 'item')
        }
        this.showPopup = this.showPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }
    showPopup(item, e) {
        this.setState({
            open: true,
            item: item
        });
    }
    closePopup(e) {
        this.setState({
            open: false
        });
    }


    render() {
        const{item}= this.state;
        const {isAppartment} = this.props;
        return (
            
            <Wrapper>
                <PopupStyle modal open={this.state.open} lockScroll={true}>
                    <Header onClick={this.closePopup}>
                        <Return width='16px' height='16px' stroke='#748cad' />
                    </Header>
                    <WrapperContent>
                        <Item column={12} hard noPadding>
                            <InfoProperties label={"Mặt bằng"} active>
                                <Img src={item.groundImagesPU} alt="" />
                            </InfoProperties>                                          
                        </Item>
                        <Item column={6} hard noPadding>
                            <InfoProperties label={"Thể loại"}>
                                {item.typePU}
                            </InfoProperties>                                          
                        </Item>
                        {
                            isAppartment && 
                            <Item column={6} hard noPadding>
                                <InfoProperties label={"Diện tích thông thủy (m2)"}>
                                    {item.carpetArea}
                                </InfoProperties>                                          
                            </Item>
                        }
                        <Item column={6} hard noPadding>
                            <InfoProperties label={"Số lượng"}>
                                {item.total}
                            </InfoProperties>                                          
                        </Item>
                        {
                            isAppartment && 
                            <Item column={6} hard noPadding>
                                <InfoProperties label={"Diện tích tim tường (m2)"}>
                                    {item.builtUpArea}
                                </InfoProperties>                                          
                            </Item>
                        }
                         {
                            isAppartment && 
                            <Item column={6} hard noPadding>
                                <InfoProperties label={"Phòng ngủ"}>
                                    {item.totalBedroom}
                                </InfoProperties>                                          
                            </Item>
                         }
                        <Item column={6} hard noPadding>
                            <InfoProperties label={"Giá (triệu / m2)"}>
                                {item.priceFrom}
                            </InfoProperties>                                          
                        </Item>
                        {
                            isAppartment && 
                            <Item column={6} hard noPadding>
                                <InfoProperties label={"Phòng tắm"}>
                                    {item.totalBathroom}
                                </InfoProperties>                                          
                            </Item>
                        }
                    </WrapperContent>
                </PopupStyle>
            </Wrapper>
        )
    }
}


export default PopupTypeDetail;