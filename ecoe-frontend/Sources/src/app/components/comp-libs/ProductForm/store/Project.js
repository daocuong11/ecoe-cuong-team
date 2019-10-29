import Store from './newStore';
import data from '../mockup/projectData';
import { BehaviorSubject } from 'rxjs'
class Project extends Store {

	TYPE = 'PROJECT';

	constructor(data) {
		super(data);
		this.$watch = new BehaviorSubject('');
	}

	applyStore() {
		let storeData = this.getStorage();
		this.data = storeData;

		this.$watch.next('applyStore');
	}

	removeStore() {
		this.data = {};
		this.saveStorage();
	}

}

export default new Project(data);
