import React from "react";
import { Container, Item } from "./Wrapper";

import { WARDS } from "globalConstants/searchCritical";
import { areaSearchTest } from "globalConstants/productSearchCritical";

import AccordingSearchDB from "../AccordingSearch/AccordingSearchDB";


class WardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let wards= areaSearchTest.wards.filter(item => item.district_id === this.props.district_id);
        
        return (
            <Container>
                <Item>
                    <AccordingSearchDB
                        filterMobile={true}
                        type={WARDS}
                        search={ wards }
                        parentId={this.props.district_id}
                        hideIcon={true}
                    />
                </Item>
            </Container>
        )
    }
}

export default WardContainer;