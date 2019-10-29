import React from 'react';
import { Column, Title, Content, ContentFlex } from "./Wrapper";
import ListingSearchDB from "../../ListingSearch/ListingSearchDB";
import { bedsSearch, bathsSearch, directionsSearch, juridicalSearch } from "globalConstants/productSearchCritical";
import ContainerSearchBorderDB from '../../ContainerSearchBorder/ContainerSearchBorderDB';
import { BEDS, BATHS,DIRECTIONS,JURIDICAL } from "globalConstants/searchCritical";

class LandAdvance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTypes: [BEDS, BATHS,DIRECTIONS,JURIDICAL]
        };
    }
    onChange(e){
        this.props.onChange!==undefined && this.props.onChange({
            data: e
        });
      }
    render() {
        return (
            // <Wrapper>Tìm kiếm Nhà đất</Wrapper>
            <ContainerSearchBorderDB type={0} name="Nâng cao" maxWidth={"900px"} currentTypes={this.state.currentTypes} position={this.props.position}>
                <Column col={this.props.col}>
                    <Title>Phòng ngủ</Title>
                    <ContentFlex>
                        <ListingSearchDB displayFlex={true} col={3}
                            type={BEDS}
                            search={bedsSearch}
                            hideIcon={true}
                            hideCheckAll={true}
                            onChange={obj => {
                                this.setState({
                                    currentTypes: this.state.currentTypes
                                });
                                this.onChange(obj);
                            }}
                        />
                    </ContentFlex>
                </Column>

                <Column col={this.props.col}>
                    <Title>Phòng tắm</Title>
                    <ContentFlex>
                        <ListingSearchDB displayFlex={true} col={3}
                            type={BATHS}
                            search={bathsSearch}
                            hideIcon={true}
                            hideCheckAll={true}
                            onChange={obj => {
                                this.setState({
                                    currentTypes: this.state.currentTypes
                                });
                                this.onChange(obj);
                            }}
                        />
                    </ContentFlex>
                </Column>

                <Column col={this.props.col}>
                    <Title>Hướng</Title>
                    <ContentFlex>
                        <ListingSearchDB displayFlex={true} col={3}
                            type={DIRECTIONS}
                            search={directionsSearch}
                            hideIcon={true}
                            hideCheckAll={true}
                            onChange={obj => {
                                this.setState({
                                    currentTypes: this.state.currentTypes
                                });
                                this.onChange(obj);
                            }}
                        />
                    </ContentFlex>
                </Column>
                <Column col={this.props.col}>
                    <Title>Pháp lý</Title>
                    <Content>
                        <ListingSearchDB
                            type={JURIDICAL}
                            search={juridicalSearch}
                            hideIcon={true}
                            hideCheckAll={true}
                            onChange={obj => {
                                this.setState({
                                    currentTypes: this.state.currentTypes
                                });
                                this.onChange(obj);
                            }}
                        />
                    </Content>
                </Column>
            </ContainerSearchBorderDB>
        );
    }
}

export default LandAdvance;