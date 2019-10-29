import React from "react";
import { Container, Item, Label, DistrictSelect } from "./Wrapper";
import AccordingDB from "./Accordion/AccordionDB";
import OpenChildModal from "./OpenChildModal";
import ClearAll from "./ClearAll";

import { CITIES, PRICE, ACREAGE, STATUS, HOUSE, BUILDING, MAISON, LAND } from "globalConstants/searchCritical";
import { statusSearch, areaSearchTest } from "globalConstants/productSearchCritical";
import { PROJECT } from 'globalConstants/domainType';

import OpenChildDistrictWard from './OpenChildDistrictWard';

import RangeSelectDB from '../../RangeSelect/RangeSelectDB';
import AccordingSearchDB from "../AccordingSearch/AccordingSearchDB";
import { projectTypeSearch, houseTypeSearch } from "globalConstants/productSearchCritical";

import { searchCriticals } from "constants/productSearchCritical";

class StandardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.clearAll = this.clearAll.bind(this);  
    }

    clearAll() {
        localStorage.setItem("searchCriticals", JSON.stringify(searchCriticals));
        this.props.clearAll();
    }
    
    render() {
        let typeSearch = {};
        if(this.props.productType === PROJECT){
            typeSearch = projectTypeSearch            
        }else{
            typeSearch = houseTypeSearch            
        }
        return (
            <Container>
                <ClearAll onClick={this.clearAll}/>
                <Item>
                    <Label>Loại hình</Label>
                    <AccordingDB title="Nhà phố" initiallyCollapsed  
                                filterMobile={true}
                                accordionButton={true}
                                type={HOUSE}
                                search={typeSearch.house}>                     
                    </AccordingDB>

                    <AccordingDB title="Căn hộ" marginBottom initiallyCollapsed
                                filterMobile={true}
                                accordionButton={true}
                                type={BUILDING}
                                search={typeSearch.building}
                                >
                    </AccordingDB>
                    <AccordingDB title="Biệt thự" marginBottom initiallyCollapsed
                                filterMobile={true}
                                accordionButton={true}
                                type={MAISON}
                                search={typeSearch.maison}
                                >
                    </AccordingDB>
                    

                    <div>
                        <AccordingSearchDB
                            filterMobile={true}
                            type={LAND}
                            search={typeSearch.land}
                        />
                    </div>

                </Item>
                {/* ================================ */}
                <Item relative>
                    <Label>khu vực</Label>
                    <div>
                        <AccordingSearchDB
                            filterMobile={true}
                            openModalButton={true}

                            type={CITIES}
                            search={areaSearchTest.city}
                            hideIcon={true}
                            hideCheckAll={true}
                            onChange={obj => {
                                if (obj.isChecked)
                                    this.props.updateProvince(obj.value);
                                else
                                    obj.updateSearchByType(CITIES, obj.value)
                            }}
                        >
                            <OpenChildDistrictWard
                                title="Chọn quận"
                                onClick={() => { this.props.updateSection("districts") }}
                            />
                        </AccordingSearchDB>
                    </div>
                </Item>
                {/* ================================ */}
                <Item>
                    <Label unit="Đơn vị: tỉ đồng">Giá</Label>
                    <div>
                        <RangeSelectDB type={PRICE}
                            domain={[0, 20]}
                            valueTicks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}
                            defaultValues={[2, 4]}
                            step={1}
                            unit="tỷ"
                            currency="VNĐ"
                            hideTick={'odd'}
                            filterMobile={true}
                        />
                    </div>
                </Item>
                {/* ================================ */}
                <Item>
                    <Label unit="Đơn vị: m2">Diện tích</Label>
                    <div>
                        <RangeSelectDB type={ACREAGE}
                            domain={[0, 300]}
                            valueTicks={[0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300]}
                            defaultValues={[0, 50]}
                            step={25}
                            hideTick={'odd'}
                            unit="m2"
                            filterMobile={true}
                        />
                    </div>
                </Item>
                {/* ================================ */}
                <Item>
                    <Label>Trạng thái</Label>
                    <AccordingSearchDB
                        filterMobile={true}
                        type={STATUS}
                        search={this.props.productType === PROJECT ? statusSearch.PRJ : statusSearch.HM}
                        hideIcon={true}
                        hideCheckAll={true}
                    />
                </Item>
                {/* ================================ */}
                <Item>
                    <Label>Khác</Label>
                    <OpenChildModal
                        title="Người đăng"
                        onClick={() => { this.props.updateSection("author") }}
                    />
                    <OpenChildModal
                        title="Chủ đầu tư"
                        onClick={() => { this.props.updateSection("investors") }}
                    />
                </Item>

            </Container>
        )
    }
}

export default StandardContainer;