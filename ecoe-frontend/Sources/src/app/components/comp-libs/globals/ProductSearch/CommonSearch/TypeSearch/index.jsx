import React from 'react';
import PropTypes from 'prop-types';
import ContainerSearchBorder from '../../ContainerSearchBorder';
import { projectTypeSearch,houseTypeSearch } from "globalConstants/productSearchCritical";
import {PROJECT} from "constants/domainType";
import { Column } from './Wrapper';
import ListingSearchDB from '../../ListingSearch/ListingSearchDB';
import ContainerSearchBorderDB from '../../ContainerSearchBorder/ContainerSearchBorderDB';
import { HOUSE, BUILDING, MAISON, LAND } from "globalConstants/searchCritical";

import withProductType from "apolloComponents/withProductType";

class TypeSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTypes: [HOUSE, BUILDING, MAISON, LAND]
        };
    }
    
    componentDidMount(){
        
    }
    onChange(e) {
        this.props.onChange !== undefined && this.props.onChange({
            data: e
        });
    }

    render() {
        let typeSearch ={};
        if(this.props.productType === PROJECT){
            typeSearch = projectTypeSearch            
        }else{
            typeSearch = houseTypeSearch            
        }
        return (
            <ContainerSearchBorderDB type={0} name="Loại hình" maxWidth={'750px'} padding={'30px'} currentTypes={this.state.currentTypes} {...this.props}>
                <Column col={this.props.col}>
                    <ListingSearchDB
                        type={HOUSE}
                        search={typeSearch.house}
                        onChange={obj => {
                            this.setState({
                                currentTypes: this.state.currentTypes
                            });
                            this.onChange(obj);
                        }}
                    />
                </Column>

                <Column col={this.props.col}>
                    <ListingSearchDB
                        type={BUILDING}
                        search={typeSearch.building}
                        onChange={obj => {
                            this.setState({
                                currentTypes: this.state.currentTypes
                            });
                            this.onChange(obj);
                        }}
                    ></ListingSearchDB>

                </Column>

                <Column col={this.props.col}>
                    <ListingSearchDB
                        type={MAISON}
                        search={typeSearch.maison}
                        onChange={obj => {
                            this.setState({
                                currentTypes: this.state.currentTypes
                            });
                            this.onChange(obj);
                        }}
                    ></ListingSearchDB>
                </Column>

                <Column col={this.props.col}>
                    <ListingSearchDB
                        type={LAND}
                        search={typeSearch.land}
                        onChange={obj => {
                            this.setState({
                                currentTypes: this.state.currentTypes
                            });
                            this.onChange(obj);
                        }}
                    ></ListingSearchDB>
                </Column>
            </ContainerSearchBorderDB>
        );
    }
}

TypeSearch.propTypes = {
    col: PropTypes.number,
};

export default TypeSearch;