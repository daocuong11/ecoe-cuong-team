import React from 'react';
import Wrapper, { WrapperSearch, WrapperButton } from './Wrapper';
import CommonSearch from './CommonSearch';
import AdvanceSearch from './AdvanceSearch';
import ProjectTypeSearchDB from './CommonSearch/ProjectTypeSearch/ProjectTypeSearchDB';
import SearchBarDB from './SearchBar/SearchBarDB';
import TypeSearchDropdownDB from './TypeSearchDropdown/TypeSearchDropdownDB';
import RButtonCard from '../Buttons/RButtonCard';
import { getDomainUrl } from "globalUtils/getDomainUrl";
import withResolution from '../../../../../graphql/apollo-components/withResolution';
import { SM, MD } from "constants/resolutions";
import MapFilterSelection from '../../../elements/Buttons/MapFilterSelection';
import FixBottomCPS from '../FixBottomCPS';

import MobileModal from './ModalFilterMobile/MobileModal';

class ProductSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productType: localStorage.getItem('productType'),
            isRenderSearchBar: true
        }
        this.renderSearchBar = this.renderSearchBar.bind(this);
    }

    handleChange = (data) => {
        this.setState({
            productType: data.productType
        });

    };

    renderSearchBar(e) {
        this.setState({
            isRenderSearchBar: true
        });
    }

    handleClick = () => {
        this.filter.showPopup(true);
    }

    render() {
        //let isSearchResultPage= this.props.isSearchResultPage;
        const domainType = localStorage.getItem("domainType");
        let pageName = getDomainUrl(domainType);
        let subDomain = localStorage.getItem("domainName");
        let url = `/${subDomain}/${pageName}/search`;
        let { resolution } = this.props;
        let isMobile = resolution === SM;
        return (
            <Wrapper>
                {!this.props.isSearchResultPage && <ProjectTypeSearchDB onChange={this.handleChange} />}
                {!isMobile ? (
                    <WrapperSearch>
                        {this.props.isSearchResultPage && <TypeSearchDropdownDB onChange={this.handleChange} />}
                        <CommonSearch productType={this.state.productType} onChange={this.renderSearchBar} />
                        <AdvanceSearch productType={this.state.productType} onChange={this.renderSearchBar} />
                        {!this.props.isSearchResultPage
                            && <WrapperButton as="a" href={url}>
                                <RButtonCard type="1" label={'ÁP DỤNG'} ></RButtonCard>
                            </WrapperButton>
                        }

                    </WrapperSearch>) : (
                        <FixBottomCPS footer={1500}>
                            <MobileModal ref={(filter) => { this.filter = filter }} productType={this.state.productType} />
                            <MapFilterSelection onClick={this.handleClick} />
                        </FixBottomCPS>
                    )}

                {this.state.isRenderSearchBar && this.props.isSearchResultPage && <SearchBarDB productType={this.state.productType} removeItem={this.renderSearchBar} />}
            </Wrapper>
        );
    }
}

export default withResolution(ProductSearch);
