import React from 'react';
//import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import ContainerSearchBorder from '../../ContainerSearchBorder';
import RangeSelectDB from '../../../RangeSelect/RangeSelectDB';
import ContainerSearchBorderDB from '../../ContainerSearchBorder/ContainerSearchBorderDB';
import { ACREAGE } from "globalConstants/searchCritical";

class AcreageSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTypes: [ACREAGE],
        };

    }
    onChange(e){
        this.props.onChange!==undefined && this.props.onChange({
            data: e
        });
      }
    render() {
        //debugger
        return (<ContainerSearchBorderDB type={0} name="Diện tích" maxWidth={"424px"} currentTypes={this.state.currentTypes}>
            <RangeSelectDB type={ACREAGE}
                domain={[0, 300]}
                valueTicks={[0, 25, 50, 75, 100, 125,150 ,175, 200, 225, 250, 275 ,300]}
                defaultValues={[0, 50]}
                step={25}
                hideTick={'odd'}
                unit="m2"
                onChange={obj => {
                    this.setState({
                        currentTypes: this.state.currentTypes
                    });
                    this.onChange(obj);
                }}
            />
        </ContainerSearchBorderDB>
        );
    }
}

AcreageSearch.propTypes = {

};

export default AcreageSearch;