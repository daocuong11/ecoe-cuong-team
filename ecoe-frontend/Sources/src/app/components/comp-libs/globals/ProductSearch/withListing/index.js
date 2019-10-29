import React, { Component, Fragment } from "react";
import {
    convertObjectToArray,
    pushToArray
} from "globalUtils/updateSearchTreeNode";
import { CITIES, DISTRICTS, WARDS } from "globalConstants/searchCritical";

const withListing = (WrappedComponent) => {
    const updateArrayFillterByKey = function (array, filter, value, hideCheckAll) {
        if (array[0].filter === filter && !hideCheckAll) {
            array.forEach(function (item, index) {
                item.value = value;
            });

        } else {
            let indexOfUpdateCheckbox = array.findIndex(obj => obj.filter === filter);
            array[indexOfUpdateCheckbox].value = value;

            let isChecked = 0;
            let index = hideCheckAll ? 0 : 1;
            for (let i = index; i < array.length; i++) {
                if (array[i].value === true) {
                    isChecked++;
                }
            }
            if (!hideCheckAll) {

                let length = array.length - 1;
                if (isChecked === length) {
                    array[0].value = 3;
                } else if (isChecked === 0) {
                    array[0].value = 1;
                } else {
                    array[0].value = 2;
                }
            }
            return array;
        }

        return array;
    };

    return class ListingSearch extends Component {
        constructor(props) {
            super(props);
            let arrChecked;

            if (
                this.props !== undefined &&
                this.props.data !== null &&
                this.props.data !== undefined
            ) {
                arrChecked = this.props.data.getSearchCritical(this.props.type);
            }

            this.state = {
                arrFilter: convertObjectToArray(props.search),
                checkeds: arrChecked,
                isSelected: false,
            };

            this.updateValue = this.updateValue.bind(this);
            this.updateSearchByType = this.updateSearchByType.bind(this);
        }
        getCheckeds =()=>{
            let arrChecked;
            if (
                this.props !== undefined &&
                this.props.data !== null &&
                this.props.data !== undefined
            ) {
                arrChecked = this.props.data.getSearchCritical(this.props.type);
            }

            this.setState ( {               
                checkeds: arrChecked,      
                arrFilter: convertObjectToArray(this.props.search),          
            });
            this.updateValue();
        }
        componentDidMount() {
            //debugger
            this.updateValue();
        }
        UNSAFE_componentWillReceiveProps(nextProps) {
            this.getCheckeds();
            this.updateValue();
        }
        handleClick = (key, value) => {
            this.props.onChange !== undefined &&
                this.props.onChange({
                    key: this.props.type,
                    value: value ? key : -1,
                    isChecked: value,
                    updateSearchByType: this.updateSearchByType
                });
        };

        updateValue() {
            let temp = [];
            this.state.arrFilter.forEach(item => {
                if(this.state.checkeds.length<1){
                    item.value = false;
                }else
                this.state.checkeds.forEach(check => {
                    if (item.filter === check.id) {
                        item.value = true;
                    }
                });
                temp.push(item);
            });

            if (!this.props.hideCheckAll && temp.length > 1) {
                let length = temp.length - 1;
                let lengthCheck = temp.filter(item => item.value === true);
                if (lengthCheck.length === length) {
                    temp[0].value = 3;
                } else if (lengthCheck.length === 0) {
                    temp[0].value = false;
                } else {
                    temp[0].value = 2;
                }

            }
            this.setState({
                arrFilter: temp
            });
        }

        updateCheckbox = (key, value) => {

            let arrFilter = updateArrayFillterByKey(this.state.arrFilter, key, value, this.props.hideCheckAll);
            //Raise Event
            this.props.onChange !== undefined &&
                this.props.onChange({
                    key: this.props.type,
                    value: key,
                    isChecked: value,
                    arrChecked: arrFilter.filter(item => item.value === true),
                    updateSearchByType: this.updateSearchByType
                });

            this.setState(state => ({
                arrFilter: arrFilter,
                isSelected: arrFilter[0].value !== 1
            }));



            if (
                this.props !== undefined &&
                this.props.data !== null &&
                this.props.data !== undefined
            ) {
                let arr = pushToArray(this.props.data.getSearchCritical(this.props.type), this.state.arrFilter, this.props.hideCheckAll, this.props.parentId);
                this.props.data.updateSearchCritical(this.props.type, arr, true);
            }
        };

        updateSearchByType(type, id) {
            if (
                this.props !== undefined &&
                this.props.data !== null &&
                this.props.data !== undefined
            ) {

                if (type === CITIES) {
                    let objDistricts = this.props.data.getSearchCritical(DISTRICTS);
                    let objWards = this.props.data.getSearchCritical(WARDS);
                    objDistricts.forEach(element => {
                        objWards = objWards.filter(item => item.parentId !== element.id);
                    });
                    objDistricts = objDistricts.filter(item => item.parentId !== id);
                    this.props.data.updateSearchCritical(DISTRICTS, objDistricts, true);
                    this.props.data.updateSearchCritical(WARDS, objWards, true);
                }
                //Handle if Component is 'districts'
                else if (type === DISTRICTS) {
                    let objWards = this.props.data.getSearchCritical(WARDS);
                    if (id > 0)
                        objWards = objWards.filter(item => item.parentId !== id);
                    else
                        objWards = [];
                    this.props.data.updateSearchCritical(WARDS, objWards, true);
                }
            }
        }

        render() {
            return (
                <Fragment>
                    <WrappedComponent {...this.props} arrFilter={this.state.arrFilter} updateCheckbox={this.updateCheckbox} handleClick={this.handleClick.bind(this)} />
                </Fragment>
            )
        }
    }
}


export default withListing;
