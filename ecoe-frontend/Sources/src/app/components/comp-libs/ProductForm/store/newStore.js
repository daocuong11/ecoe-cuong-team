import _ from 'lodash';

const STORE_KEY = 'PRODUCT-FORM';

class newStore {

	TYPE;

	constructor(data) {
		this.initStorage();
		this.data = new Object(data);
	}

	get(path) {
		if(path) return _.get(this.data, path);
		else return this.data;
	}

	set(path, value){
		_.set(this.data, path, value);

		this.saveStorage();
	}

	saveStorage() {
		let store = window.localStorage;
		let data = JSON.parse(store.getItem(STORE_KEY));

		_.set(data, this.TYPE, this.data);

		store.setItem(STORE_KEY, JSON.stringify(data));
	}

	getStorage() {
		let store = window.localStorage;
		let data = store.getItem(STORE_KEY);
		if(data) {
			let result = _.get(JSON.parse(data), this.TYPE);

			return result;
		}

		return {};
	}

	initStorage() {
		let store = window.localStorage;
		if(!store.getItem(STORE_KEY)) {
			store.setItem(STORE_KEY, JSON.stringify({}));
		}
	}

}

export default newStore;