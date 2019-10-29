import React from "react";
import { Container, Item } from "./Wrapper";
// import AccordingSearchDB from "../AccordingSearch/AccordingSearchDB";
// import { INVESTORS } from "globalConstants/searchCritical";
// import { investorSearch } from "globalConstants/productSearchCritical";

class InvestorContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <Item>
                    Chủ đầu tư
                    {/* <AccordingSearchDB
                        filterMobile={true}
                        type={INVESTORS}
                        search={investorSearch}
                        hideIcon={true}
                        hideCheckAll={true}
                    /> */}
                </Item>
            </Container>
        )
    }
}

export default InvestorContainer;