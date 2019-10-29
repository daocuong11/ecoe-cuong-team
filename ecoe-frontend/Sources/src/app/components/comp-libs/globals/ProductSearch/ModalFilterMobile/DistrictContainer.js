import React from "react";
import { Container, Item } from "./Wrapper";
import { DISTRICTS, CITIES } from "globalConstants/searchCritical";
import { areaSearchTest } from "globalConstants/productSearchCritical";
import AccordingSearchDB from "../AccordingSearch/AccordingSearchDB";
import OpenChildDistrictWard from "./OpenChildDistrictWard";

class DistrictContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     this.setState({
    //         provinceId: nextProps
    //     });
    // }
    render() {        
        let districts=  areaSearchTest.districts.filter(item => item.province_id === this.props.province_id);

        return (
            <Container>
                <Item>
                    <AccordingSearchDB
                        filterMobile={true}
                        openModalButton={true}

                        type={DISTRICTS}
                        search={districts}
                        parentId={this.props.province_id}
                        hideIcon={true}
                        onChange={obj => {
                            if (obj.isChecked)
                              this.props.updateDistrict(obj.value);  
                            else
                              obj.updateSearchByType(CITIES, obj.value)                              
                          }}
                    >
                        <OpenChildDistrictWard
                            title="Chọn phường"
                            onClick={() => { this.props.updateSection("wards") }}
                        />
                    </AccordingSearchDB>
                </Item>
            </Container>
        )
    }
}

export default DistrictContainer;