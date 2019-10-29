import React from 'react';
//import PropTypes from 'prop-types';
import RangeSelectDB from  '../../../RangeSelect/RangeSelectDB';
import ContainerSearchBorderDB from '../../ContainerSearchBorder/ContainerSearchBorderDB';
import { PRICE } from "globalConstants/searchCritical";

class PriceSearch extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {
            currentTypes: [PRICE]
        };    
    }
    onChange(e){
        this.props.onChange!==undefined && this.props.onChange({
            data: e
        });
      }
    render(){
        return (
            // <Wrapper>Price Search Content</Wrapper>
            <ContainerSearchBorderDB type={0} name="Giá" maxWidth={"420px"} currentTypes={this.state.currentTypes}>
                <RangeSelectDB type={PRICE}
                            domain={[0, 20]} 
                            valueTicks={[0, 1, 2, 3, 4, 5,6 ,7, 8, 9, 10, 11 ,12,13,14,15,16,17,18,19,20]}
                            defaultValues={[2, 4]}
                            step={1}
                            unit="tỷ" 
                            currency="VNĐ"
                            hideTick={'odd'}
                            onChange={obj=>{
                                this.setState({
                                    currentTypes: this.state.currentTypes
                                });
                                this.onChange(obj);
                            }}/>
            </ContainerSearchBorderDB>
        );
    }
}

PriceSearch.propTypes = {
    
};

export default PriceSearch;