import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { APPARTMENT } from "constants/projectDetail";
import withResolution from 'apolloComponents/withResolution';
import { SM, MD, LG_P } from "constants/resolutions";
import Next from 'images/icons/icon-next-1.svg'
import Img from "../../../../elements/Img";
import PopupTypeDetail from './PopupTypeDetail';

const Wrapper = styled.div`
overflow: auto;
overflow: -moz-scrollbars-none;
-ms-overflow-style: none;
&::-webkit-scrollbar { width: 0 !important }
`;

const Chevron = styled(Img)`
height: 39px;
cursor: pointer;
padding: 10px 11px;
`;

const Line = styled.div`
    width: 100%;
    display: ${props => !props.label && "inline-flex"};
    align-items: ${props => !props.label && "center"};
    font-weight: ${props => !props.label && "bold"};
    color: ${props => props.label && "#183253"};
    padding: 20px 0;
    border-bottom: 1px dashed #ccc;

    &:first-child {
        padding-top: 0;
    }
    &:last-child {

    }
`;

const Item = styled.div`
    display: inline-flex;
    width: calc((100% - 70px) / ${props=>props.col? props.col:'8'});
    padding: 0 5px;
    box-sizing: content-box;
    font-size: ${props => props.showNum ? "16px" : "14px"};

    &:first-child {
        padding-left: 0;
    }
    &:last-child {
        padding-right: 0;
    }
`;

class TypeDetail extends React.Component {
    constructor(props){
        super(props);
        this.state={};

    }

    render(){
        let { projectSummaries } = this.props;
        let { resolution } = this.props;
        let isMobile = resolution === SM || resolution === MD;
        let col = 4;
        if(!isMobile && this.props.type === APPARTMENT)
            col = 8;
        if(isMobile)
            col = 3;
        return (
            <Wrapper>
                <PopupTypeDetail ref={(refPopupTypeDetail)=> this.refPopupTypeDetail = refPopupTypeDetail} item={projectSummaries} isAppartment ={this.props.type === APPARTMENT}/>
                <Line label>
                    <Item label col={col}>Mặt bằng</Item>
                    <Item label col={col}>Thể loại</Item>
                    <Item label col={col}>Số lượng</Item>
                    {!isMobile &&
                        <Fragment>
                            {
                                this.props.type === APPARTMENT && (
                                    <Fragment>
                                        <Item label col={col}>Phòng ngủ</Item>
                                        <Item label col={col}>Phòng tắm</Item>
                                        <Item label col={col}>Diện tích thông thủy (m2)</Item>
                                        <Item label col={col}>Diện tích tim tường (m2)</Item>
                                    </Fragment>
                                )
                            }
                            <Item label col={col}>Giá (triệu/m2)</Item>
                        </Fragment>
                    }
                </Line>

                {projectSummaries.map((item) => (
                    <Line>
                        
                        <Item col={col}><img style={{width: '70px', height:'50px'}} src={item.groundImagesPU} alt="" /></Item>
                        <Item col={col}>{item.typePU}</Item>
                        <Item showNum col={col}>{item.total}</Item>
                        {!isMobile &&
                        <Fragment>
                            {
                                this.props.type === APPARTMENT && (
                                    <Fragment>
                                        <Item col={col}>{item.totalBedroom}</Item>
                                        <Item col={col}>{item.totalBathroom}</Item>
                                        <Item col={col}>{item.carpetArea}</Item>
                                        <Item col={col}>{item.builtUpArea}</Item>
                                    </Fragment>
                                )
                            }
                            <Item col={col}>{item.priceFrom}</Item>
                        </Fragment>
                        }
                        {isMobile && <Chevron src={Next} onClick={()=>this.refPopupTypeDetail.showPopup(item)}/>}
                    </Line>
                ))}
            </Wrapper>

        );
    }
}

TypeDetail.propTypes = {
    projectSummaries: PropTypes.object,
    type: PropTypes.string,
};

export default withResolution(TypeDetail);