import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { areaSearchTest } from "globalConstants/productSearchCritical";
import { Column, Title, Content } from "./Wrapper";
import { Query, withApollo } from "react-apollo";
import { GET_CITY, GET_DISTRICT, GET_WARD } from "./query";
import ListingSearchDB from "../../ListingSearch/ListingSearchDB";
import ContainerSearchBorderDB from "../../ContainerSearchBorder/ContainerSearchBorderDB";
import { CITIES, DISTRICTS, WARDS } from "globalConstants/searchCritical";

class AreaSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      province_id: -1,
      district_id: -1,
      currentTypes: [CITIES, DISTRICTS, WARDS]
    };
  }

  onChange(e) {
    this.props.onChange !== undefined && this.props.onChange({
      data: e
    });
  }


  render() {
    return (
      <ContainerSearchBorderDB type={0} name="Khu vực" maxWidth={"723px"} currentTypes={[CITIES]}>
        <Column col={this.props.col} borderRight>
          <Title>Tỉnh thành</Title>
          <Content>
            <Query query={GET_CITY} fetchPolicy="cache-and-network">
              {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error...</p>;

                return (
                  <Fragment>
                    <ListingSearchDB
                      type={CITIES}
                      search={areaSearchTest.city}
                      hideIcon={true}
                      hideCheckAll={true}
                      onChange={obj => {
                        if (obj.isChecked)
                          this.setState({
                            province_id: obj.value,
                            district_id: -1,
                            currentTypes: [CITIES]
                          });
                        else {
                          this.setState({
                            province_id: -1,
                            district_id: -1,
                            currentTypes: [CITIES]
                          });
                          obj.updateSearchByType(CITIES, obj.value)
                        }
                      }}
                    />
                  </Fragment>
                );
              }}
            </Query>
          </Content>
        </Column>

        <Column col={this.props.col} borderRight>
          <Title>Quận</Title>
          <Content>
            <Query
              query={GET_DISTRICT}
              variables={{ id: this.state.province_id }}
              fetchPolicy="cache-and-network"
            >
              {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error...</p>;

                return (
                  <Fragment>
                    <ListingSearchDB
                      type={DISTRICTS}
                      search={
                        this.state.province_id === -1
                          ? {}
                          : areaSearchTest.districts.filter(item => item.province_id === this.state.province_id)
                      }
                      parentId={this.state.province_id}
                      hideIcon={true}
                      onChange={obj => {
                        if (obj.isChecked)
                          this.setState({
                            district_id: obj.value,
                            currentTypes: [CITIES]
                          });
                        else {
                          this.setState({
                            district_id: -1,
                            currentTypes: [CITIES]
                          });
                          obj.updateSearchByType(DISTRICTS, obj.value)
                        }
                        this.onChange(obj);
                      }}
                    />
                  </Fragment>
                );
              }}
            </Query>
          </Content>
        </Column>

        <Column col={this.props.col}>
          <Title>Phường</Title>
          <Content>
            <Query
              query={GET_WARD}
              variables={{ id: this.state.district_id }}
              fetchPolicy="cache-and-network"
            >
              {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error...</p>;

                return (
                  <Fragment>
                    <ListingSearchDB
                      type={WARDS}
                      search={
                        this.state.district_id === -1
                          ? {}
                          : areaSearchTest.wards.filter(item => item.district_id === this.state.district_id)
                      }
                      parentId={this.state.district_id}
                      hideIcon={true}
                      onChange={obj => {
                        this.setState({
                          currentTypes: [CITIES]
                        });
                        this.onChange(obj);
                      }}
                    />
                  </Fragment>
                );
              }}
            </Query>
          </Content>
        </Column>
      </ContainerSearchBorderDB>
    );
  }
}
AreaSearch.propTypes = {
  col: PropTypes.number
};

export default withApollo(AreaSearch);
