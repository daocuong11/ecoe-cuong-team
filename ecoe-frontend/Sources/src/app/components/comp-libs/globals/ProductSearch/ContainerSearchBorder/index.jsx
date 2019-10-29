import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import { PopupStyle, ButtonDropdown, DropdownContainer, DropdownFooter, CounterLabel } from './Wrapper';
import Buttons from '../../../../elements/Buttons';
import { CITIES, DISTRICTS, WARDS } from "globalConstants/searchCritical";
import Popup from 'reactjs-popup';


const getShortName = function (name) {
    let data = name.split(' ')
    let shortName = ''
    for (let i = 1; i < data.length; i++) {
        shortName = shortName + '.' + data[i];
    }
    if (data.length > 0) {
        shortName = data[0].substring(0, 1) + shortName;
    }
    return shortName;
};

class ContainerSearchBorder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            name: this.props.name,
            open: false
        };
        this.blurHandler = this.blurHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);

    }
    blurHandler(e) {
        this.setState({
            open: false
        });
    }
    clickHandler(e) {
        this.setState({
            open: true
        })
    }
    componentDidMount() {
        this.updatValue();
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.close !== undefined) {
            this.setState({
                open: nextProps.close,
                name: nextProps.name
            });
        } else {
            if (nextProps.name !== this.state.name) {
                this.setState({
                    name: nextProps.name
                });
            }
        }
        this.updatValue();
    }


    updatValue() {
        let data = undefined;
        //debugger
        if (
            this.props !== undefined &&
            this.props.data !== null &&
            this.props.data !== undefined && this.props.currentTypes && this.props.currentTypes.length
        ) {
            var tmp = [];
            for (let i = 0; i < this.props.currentTypes.length; i++) {
                if (this.props.currentTypes[i] === CITIES) {
                    let cities = this.props.data.getSearchCritical(CITIES);
                    let districts = this.props.data.getSearchCritical(DISTRICTS);
                    let wards = this.props.data.getSearchCritical(WARDS);
                    let name = [];
                    cities.forEach(city => {
                        let districtsTmp = districts.filter(district => district.parentId === city.id)
                        if (districtsTmp.length > 0) {
                            districtsTmp.forEach(district => {
                                district.name = getShortName(district.name);
                                let wardsTmp = wards.filter(ward => ward.parentId === district.id)
                                if (wardsTmp.length > 0) {
                                    wardsTmp.forEach(ward => {
                                        name.push({
                                            id: ward.id,
                                            name: district.name + ' - ' + getShortName(ward.name),
                                            parentId: district.id,
                                        });
                                    });
                                } else {
                                    name.push({
                                        id: district.id,
                                        name: district.name,
                                        parentId: district.id,
                                    });
                                }
                            })
                        } else {
                            name.push({
                                id: city.id,
                                name: city.name,
                            });
                        }

                    });
                    tmp = tmp.concat(name);
                } else {
                    var result = this.props.data.getSearchCritical(this.props.currentTypes[i]);

                    if (result && result.length !== undefined) {
                        tmp = tmp.concat(result);
                    }
                    else
                        tmp = result
                }
            }
            data = tmp;
        }
        //Case Array
        if (data && data.length !== undefined) {
            this.setState({
                counter: data ? data.length : 1,
                name: data && data.length > 0 ? data[0].name : this.props.name
            });
        } else {//Other
            //Case Min- Max

            if (data && data.min !== undefined) {
                if (data.min !== data.max && data.max !== 0) {
                    this.setState({
                        counter: 1,
                        name: data.min + '-' + data.max + ' ' + data.unit
                    });
                } else {
                    this.setState({
                        counter: 1,
                        name: this.props.name
                    });
                }
            }
        }
    }
    // debugger
    render() {

        return (
            <Wrapper onClick={this.clickHandler} onBlur={this.blurHandler} tabIndex={0}>
                <PopupStyle trigger={
                    <ButtonDropdown type={this.props.type} >
                        {
                            this.state.counter && this.state.counter > 1 ? (<CounterLabel>{this.state.counter}</CounterLabel>) : ""
                        }
                        {
                            this.state.counter && this.state.counter === 1 ? this.state.name : this.props.name
                        }
                    </ButtonDropdown>
                }
                    position={this.props.position ? this.props.position : 'bottom left'}
                    maxWidth={this.props.maxWidth}
                    open={this.state.open}
                    arrowStyle={{ display: 'none' }}
                >
                    <DropdownContainer padding={this.props.padding}>{this.props.children}</DropdownContainer>

                    {/* <DropdownFooter>
                        <Buttons label="Hủy" />
                        <Buttons label="Áp dụng" />
                    </DropdownFooter> */}
                </PopupStyle>
            </Wrapper>
        );
    }
}

ContainerSearchBorder.propTypes = {
    type: PropTypes.number,
    name: PropTypes.string,
    searchList: PropTypes.array
};

export default ContainerSearchBorder;

