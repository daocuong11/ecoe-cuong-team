import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { Query } from "react-apollo";
import { GET_INVESTOR, } from "./query";
import ListingSearchDB from "../../ListingSearch/ListingSearchDB";
import { Content } from "./Wrapper";
import ContainerSearchBorderDB from "../../ContainerSearchBorder/ContainerSearchBorderDB";
import { INVESTORS } from "globalConstants/searchCritical";

class ProjectAdvance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTypes: [INVESTORS]
        };
    }
    onChange(e){
        this.props.onChange!==undefined && this.props.onChange({
            data: e
        });
      }
    render() {
        return (
            <ContainerSearchBorderDB type={0} name="Chủ đầu tư" maxWidth={"200px"} currentTypes={this.state.currentTypes} position={this.props.position}>
                <Content>
                    <Query query={GET_INVESTOR} fetchPolicy="cache-and-network">
                        {({ loading, error, data }) => {
                            if (loading) return <p>Loading...</p>;
                            if (error) return <p>Error...</p>;

                            return (
                                <Fragment>
                                    <ListingSearchDB
                                        type={INVESTORS}
                                        search={data.getInvestors}
                                        hideIcon={true}
                                        hideCheckAll={true}
                                        onChange={obj => {
                                            this.setState({
                                                currentTypes: this.state.currentTypes
                                            });;
                                            this.onChange(obj);
                                        }}
                                    />
                                </Fragment>
                            );
                        }}
                    </Query>
                </Content>
            </ ContainerSearchBorderDB>
        );
    }
}

ProjectAdvance.propTypes = {
    col: PropTypes.number,
};

export default ProjectAdvance;