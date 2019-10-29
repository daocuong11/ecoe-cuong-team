import React from "react";
import { Container, Item } from "./Wrapper";

import { AUTHORS } from "globalConstants/searchCritical";
import { authorSearch } from "globalConstants/productSearchCritical";
import AccordingSearchDB from "../AccordingSearch/AccordingSearchDB";


class AuthorContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <Item>
                    <AccordingSearchDB
                        filterMobile={true}
                        type={AUTHORS}
                        search={authorSearch}
                        hideIcon={true}
                        hideCheckAll={true}
                    />
                </Item>
            </Container>
        )
    }
}

export default AuthorContainer;