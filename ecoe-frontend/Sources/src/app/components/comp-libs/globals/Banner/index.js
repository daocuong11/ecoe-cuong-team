import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import Wrapper, { HeaderBorder, Content, ViewSubdomain } from './Wrapper';
import Title from './Title';
import Header from "../Header";
import SearchContent from './SearchContent';
import { MS, SD_BO, SD_FO, SR } from "globalConstants/domainType";

import ButtonSubdomain from '../../../elements/Buttons/ButtonSubdomain';
import { getDomainUrl } from "globalUtils/getDomainUrl";

let subDomain = `/${localStorage.getItem("domainName")}`;


export const ConfigContext = React.createContext(
    {
        domainType: MS,
    });

let listMenu = [
    {
        link: subDomain + "/" + getDomainUrl(MS),
        name: "Kho hàng chung"
    },
    {
        link: subDomain + "/" + getDomainUrl(SD_BO),
        name: "Cửa hàng của tôi"
    },
    {
        link: subDomain + "/danh-ba",
        name: "Danh bạ"
    },
    {
        link: subDomain + "/kiem-tra-quy-hoach",
        name: "Kiểm tra quy hoạch"
    }

];

const domainType = localStorage.getItem("domainType");
let pageName = getDomainUrl(domainType);
let url = `${subDomain}/${pageName}/search`;
let frontOffice = getDomainUrl(SD_FO);

let menuEcoeFrontOffice = [
    {
        link: subDomain + "/" + getDomainUrl(SD_FO),
        name: "Trang chủ"
    },
    {
        link: url,
        name: "Dự án"
    },
    {
        link: url,
        name: "Nhà đất"
    },
    {
        link: subDomain + "/kiem-tra-quy-hoach",
        name: "Kiểm tra quy hoạch"
    },
    {
        link: subDomain + "/" + getDomainUrl(SD_FO),
        name: "Tin tức"
    }

];

let menuFrontOffice = [
    {
        link: subDomain + "/" + frontOffice,
        name: "Trang chủ"
    },
    {
        link: `${subDomain}/${frontOffice}/search`,
        name: "Dự án",
        productType: ""
    },
    {
        link: `${subDomain}/${frontOffice}/search`,
        name: "Nhà đất"
    }
];

class Banner extends React.Component {
    render() {
        let domainType = this.props.domainType;
        let isSearchResultPage = this.props.isSearchResultPage;
        let fromEcoe = this.props.fromEcoe;
        let subDomain = `/${localStorage.getItem("domainName")}/${getDomainUrl(SD_FO)}`;
        let backOfficeLink = `/${localStorage.getItem("domainName")}/${getDomainUrl(SD_BO)}`;

        return (
            <Fragment>
                <Wrapper domainType={domainType} isSearchResultPage={isSearchResultPage} fromEcoe={fromEcoe} >
                    <HeaderBorder>
                        <Header
                            isSearchResultPage={isSearchResultPage}
                            domainType={domainType}
                            fromEcoe={fromEcoe}
                            token={this.props.token}
                            brokerHotline="123456789"
                            listMenu={domainType !== SD_FO ? (listMenu) : (fromEcoe > 0 ? menuEcoeFrontOffice : menuFrontOffice)}
                        />
                    </HeaderBorder>
                    <Content>
                        {
                            !isSearchResultPage &&
                            <Title domainType={domainType} />
                        }
                        <SearchContent domainType={domainType} />

                    </Content>
                    {
                        !isSearchResultPage && (
                            domainType === SD_BO ? (
                                <ViewSubdomain>
                                    <ButtonSubdomain label="Trang người mua" link={subDomain}></ButtonSubdomain>
                                </ViewSubdomain>
                            ) : (this.props.token !== null && domainType === SD_FO && fromEcoe > 0) && (
                                <ViewSubdomain>
                                    <ButtonSubdomain label="Cửa hàng của tôi" link={backOfficeLink}></ButtonSubdomain>
                                </ViewSubdomain>
                            )
                        )
                    }
                </Wrapper>
            </Fragment>
        );
    }
}

Banner.propTypes = {
    domainType: PropTypes.string
};

export default Banner;