import React from 'react';
import PropTypes from 'prop-types';
import { authorSearch } from "globalConstants/productSearchCritical";
import ListingSearchDB from "../../ListingSearch/ListingSearchDB";
import ContainerSearchBorderDB from '../../ContainerSearchBorder/ContainerSearchBorderDB';
import { AUTHORS} from "globalConstants/searchCritical";

class AuthorSearch extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
            currentTypes: [AUTHORS]
        };
    }
    onChange(e){
        this.props.onChange!==undefined && this.props.onChange({
            data: e
        });
      }
    render() {
        return (
            <ContainerSearchBorderDB type={0} name="Người đăng" maxWidth={"160px"} currentTypes={this.state.currentTypes}>
                <ListingSearchDB
                    type={AUTHORS}
                    search={authorSearch}
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

AuthorSearch.propTypes = {
    col: PropTypes.number,
  };

export default AuthorSearch;