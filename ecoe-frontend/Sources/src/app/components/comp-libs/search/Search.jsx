import React, { Component, Fragment } from 'react';
import { Container, Main } from './Wrapper';
import SearchCritical from "./SearchCritical";
import TitleBar from "./TitleBar";
import { ViewModeQuery } from "./viewMode";
import PageCPS from "globalComponents/PageCPS";

class Search extends Component {
    render() {
        return (
            <PageCPS isSearchResultPage={true}>
                <Container>                    
                    <Main>                        
                        <TitleBar />
                        <ViewModeQuery>
                            {
                                (mode) => (<SearchCritical mode={mode} />)
                            }
                        </ViewModeQuery>

                    </Main>
                </Container>
            </PageCPS>
        );
    }
}

export default Search;