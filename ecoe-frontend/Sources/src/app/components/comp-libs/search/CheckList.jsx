import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';

import { SD_BO } from "constants/domainType";

class CheckList extends Component {

    static propTypes = {
        children: PropTypes.func,
        onChange: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }


    onChange = (flag, id) => {
        let list = _.get(this.state, 'data');
        if(flag)
        {
            list.push(id);
        }
        else
        {
            _.remove(list, item => item === id);
        }

        this.setState({
            data: list
        });

        if(_.isFunction(this.props.onChange)) {
           this.props.onChange(this.state.data);
        }
    };

    checkAll = (flag, listItems, key) => {
        let list = [];
        if(flag)
        {
            _.forEach(listItems, item => {
                list.push(_.get(item, key));
            });
        }

        this.setState({data: list});
    };

    isOwner = () => {
        let domainType = window.localStorage.getItem('domainType');
        return _.isEqual(domainType, SD_BO);
    };

    render() {
        let {data} = this.state;
        return (
            <Fragment>
                {this.props.children({onChange: this.onChange, checkAll: this.checkAll, data, isOwner: this.isOwner()})}
            </Fragment>
        );
    }
}


export default CheckList;