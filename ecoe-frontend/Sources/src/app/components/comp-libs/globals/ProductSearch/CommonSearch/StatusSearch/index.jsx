import React from 'react';
import PropTypes from 'prop-types';
import { statusSearch } from "globalConstants/productSearchCritical";
import ListingSearchDB from "../../ListingSearch/ListingSearchDB";
import ContainerSearchBorderDB from '../../ContainerSearchBorder/ContainerSearchBorderDB';
import { STATUS} from "globalConstants/searchCritical";
import AccordingSearchDB from '../../AccordingSearch/AccordingSearchDB';

class StatusSearch extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
            currentTypes: [STATUS]
        };     
    }
    onChange(e){
        this.props.onChange!==undefined && this.props.onChange({
            data: e
        });
      }
    render() {
        return (
            <ContainerSearchBorderDB type={0} name="Trạng thái" maxWidth={"160px"} currentTypes={this.state.currentTypes}>
                <AccordingSearchDB
                    type={STATUS}
                    search={this.props.productType && this.props.productType ==="PROJECT"? statusSearch.PRJ : statusSearch.HM}
                    hideIcon={true}
                    hideCheckAll={true}
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

StatusSearch.propTypes = {
    col: PropTypes.number,
  };

export default StatusSearch;