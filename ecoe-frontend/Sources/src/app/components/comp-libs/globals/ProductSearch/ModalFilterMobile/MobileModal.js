import React, { Component, Fragment } from 'react';
import Header from './Header';
import withModalFilterMobile from '.';

import StandardContainer from "./StandardContainer";
import AuthorContainer from './AuthorContainer';
import DistrictContainer from './DistrictContainer';
import InvestorContainer from './InvestorContainer';
import WardContainer from './WardContainer';

const section = {
    standard: {
        title: "Quay lại",
        code: "standard"
    },
    author: {
        title: "Người đăng",
        code: "author"
    },
    investors: {
        title: "Chủ đâu tư",
        code: "investors"
    },
    districts: {
        title: "Chọn quận",
        code: "districts"
    },
    wards: {
        title: "Chọn phường",
        code: "wards"
    }
}
class MobileModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Quay lại',
            curSection: 'standard',
            
        };
        this.updateSection = this.updateSection.bind(this);
        this.backHandler = this.backHandler.bind(this);
        this.updateProvince = this.updateProvince.bind(this);        
    }
    province_id= -1;
    district_id = -1;
    updateSection(key ) {
        this.setState({
            title: section[key].title,
            curSection: section[key].code,            
        });
    }
    updateProvince(provinceId) {
        this.province_id = provinceId;
    }
    updateDistrict = (districtId)=>{
        this.district_id = districtId;
    }
    clearAll= ()=>{
        this.forceUpdate();
    }
    backHandler() {
        if (this.state.curSection === section["standard"].code) {
            this.props.data.closePopup();
        } else {
            if ((this.state.curSection === section["districts"].code) || (this.state.curSection === section["author"].code) || (this.state.curSection === section["investors"].code)) {
                this.updateSection("standard");
            } else {
                if (this.state.curSection === section["wards"].code) {
                    this.updateSection("districts");
                }
            }
        }
    }

    render() {
        return (
            <Fragment>
                <Header title={this.state.title} backHandler={this.backHandler} actApply={() => alert("hi")} />

                {
                    this.state.curSection === section["standard"].code ?
                        (<StandardContainer
                            productType={this.props.productType}
                            updateSection={this.updateSection}
                            curSection={this.curSection}
                            step={this.step}
                            updateProvince={this.updateProvince}
                            clearAll ={this.clearAll}
                        />) :

                        this.state.curSection === section["author"].code ?
                            (<AuthorContainer
                                productType={this.props.productType}
                                updateSection={this.updateSection}
                                curSection={this.curSection}
                                step={this.step}
                            />) :

                            this.state.curSection === section["investors"].code ?
                                (<InvestorContainer
                                    productType={this.props.productType}
                                    updateSection={this.updateSection}
                                    curSection={this.curSection}
                                    step={this.step}
                                />) :

                                this.state.curSection === section["districts"].code ?
                                    (<DistrictContainer
                                        productType={this.props.productType}
                                        updateSection={this.updateSection}
                                        curSection={this.curSection}
                                        step={this.step}
                                        province_id = {this.province_id}
                                        updateDistrict ={this.updateDistrict}
                                    />) :

                                    this.state.curSection === section["wards"].code &&
                                    (<WardContainer
                                        productType={this.props.productType}
                                        updateSection={this.updateSection}
                                        curSection={this.curSection}
                                        step={this.step}
                                        district_id= {this.district_id}
                                    />)
                }

            </Fragment>
        )
    }
}

export default withModalFilterMobile(MobileModal);