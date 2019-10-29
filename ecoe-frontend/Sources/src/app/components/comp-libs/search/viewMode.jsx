import React, { Component } from 'react';
import {ListMode, GridMode, Right} from './Wrapper';

import { Query, withApollo } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from 'prop-types';
import * as _ from 'lodash';

const LIST_MODE = 1;
const GRID_MODE = 2;

class ViewMode extends Component {

    constructor(props) {
        super(props);

        this.state = this.initState();
    }

    initState = () => {
        return {
            mode: LIST_MODE
        };
    };

    changeMode = (mode) => {
        let currentMode = _.get(this.state, 'mode');

        if(currentMode !== mode) {
            let store = this.props.client;
            if(store) {
                store.writeData({data: {viewMode: mode}});
            }

            currentMode !== mode &&this.setState({mode});
        }
    };

    render() {

        return (
            <Right>
                <ListMode active={_.isEqual(_.get(this.state, 'mode'), LIST_MODE)} disabled={_.isEqual(_.get(this.state, 'mode'), LIST_MODE)} onClick={() => this.changeMode(LIST_MODE)} />
                <GridMode active={_.isEqual(_.get(this.state, 'mode'), GRID_MODE)} disabled={_.isEqual(_.get(this.state, 'mode'), GRID_MODE)} onClick={() => this.changeMode(GRID_MODE)}/>
            </Right>
        );
    }
}

export class ViewModeQuery extends Component {

    static propTypes = {
        children: PropTypes.func.isRequired
    };

    getQuery = () => {
        return gql`
            query {
                viewMode 
            }
        `;
    };

    render() {
        return (
            <Query query={this.getQuery()}>
                {
                    ({data}) => {
                        return this.props.children(_.get(data, 'viewMode'))
                    }
                }
            </Query>
        );
    }
}

export default withApollo(ViewMode);