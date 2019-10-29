import {getJsonObjectCover, updateJsonObject} from "globalUtils/updateSearchTreeNode";
import {sale} from "constants/sale";

class Commerce {
    constructor() {
        localStorage.setItem('commerce', JSON.stringify(sale));
        this.getInfo = this.getInfo.bind(this);
        this.setInfo = this.setInfo.bind(this);
    }

    getInfo(name) {
        //console.log("Path: ", name);
        let saleJson = JSON.parse(localStorage.getItem('commerce'));
        let saleInfo = getJsonObjectCover(saleJson, name);
        //console.log("Info: ", saleInfo);
        return saleInfo;
    }

    setInfo(key, value) {
        let saleJson = JSON.parse(localStorage.getItem('commerce'));
        updateJsonObject(saleJson, key, value);
        localStorage.setItem('commerce', JSON.stringify(saleJson));
    }

    
}

export default new Commerce();