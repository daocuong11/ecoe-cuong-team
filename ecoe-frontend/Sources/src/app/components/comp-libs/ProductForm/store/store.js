import React from 'react';
import * as _ from 'lodash';

const StoreContext = React.createContext({});
const createStore = WrappedComponent => {
	return class extends React.Component {

		state = {
			get: key => {
				return this.state[key]
			},
			set: (key, value) => {
				const state = this.state;
				state[key] = value;
				this.setState(state)
			},
			remove: key => {
				const state = this.state;
				delete state[key];
				this.setState(state)
			},
			getAll: () => {
				let result = {};
				let keys = Object.keys(this.state);
				_.forEach(keys, (key) => {
					let item = _.get(this.state, key);
					if(!_.isFunction(item)) {
						_.set(result, key, item);
					}
				});

				return result;
			}
		};

		render() {
			return (
				<StoreContext.Provider value={this.state}>
					<WrappedComponent {...this.props} />
				</StoreContext.Provider>
			)
		}
	}
};

const withStore = WrappedComponent => {
	return class extends React.Component {
		render() {
			return (
				<StoreContext.Consumer>
					{context => <WrappedComponent store={context} {...this.props} />}
				</StoreContext.Consumer>
			)
		}
	}
};
export { createStore, withStore }