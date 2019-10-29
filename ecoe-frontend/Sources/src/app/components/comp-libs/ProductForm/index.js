import React, { Component } from 'react';
import {Wrapper} from './Wrapper';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Form from './pages/Form';
import * as _ from 'lodash';

class Page extends Component {

	render() {
		let {match} = this.props;

        return (
	        <Wrapper>
		        <Switch>
			        <Route path={_.join([match.path, ':type'], '/')} component={Form} />
			        <Route exact path={match.path} component={Home} />
		        </Switch>
		    </Wrapper>
        );
    }
}

export default Page;