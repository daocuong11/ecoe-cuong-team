import React, { Component } from 'react';
import { Title, TitleBar as Container, Total, Div, RightSide} from './Wrapper';
import ViewMode from "./viewMode";
import SortMode from "./sortMode";
import {getCategoryName} from 'constants/categorySearch';
import withSearchCritical from './withSearchCritical';
import withProductType from "apolloComponents/withProductType";
class TitleBar extends Component {
    render() {
        let categorySearch = localStorage.getItem("categorySearch");
        let tilte = getCategoryName(categorySearch);
        let totalResult = this.props.totalRecords;
        let domainType = localStorage.getItem("domainType");
        return (
            <Container>
                <Div>
                    <Title>{tilte}</Title>
                    <Total>{totalResult} kết quả</Total>
                </Div>
                <RightSide>
                    {domainType === 'SD_FO' ? <SortMode type={4} /> : <SortMode type={2} />}                   
                    <ViewMode />
                </RightSide>
            </Container>
        );
    }

}

export default withProductType(withSearchCritical(TitleBar));