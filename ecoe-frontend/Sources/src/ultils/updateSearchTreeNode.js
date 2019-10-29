import { debug } from "util";
import * as _ from "lodash";

export const updateSearchPropByKey = function(object, key, value) {
  object[key].value = value;
};

export const updateSearchObjectPropByKey = function(object, key, value) {
  object[key] = value;
};

export const convertJsonToObject = function(object) {
  var newObj = {};
  var keys = Object.keys(object);
  keys.forEach(key => {
    var newProp = {};
    newObj[key] = object[key].value;
  });
  return newObj;
};

const getNestedObject = (nestedObj, pathArr) => {
  console.log(pathArr);
  return pathArr.reduce(
    (obj, key) => (obj && obj[key] !== "undefined" ? obj[key] : undefined),
    nestedObj
  );
};
export const updateValueOfObject = function(object, field, value) {
  var keys = Object.keys(object);
  keys.forEach(key => {
    if (typeof object[key] === "object") {
      if (key === field) {
        object[key].value = value;
        return;
      }
      updateValueOfObject(object[key], field, value);
    }
  });
};
export const updateJsonObject = function(object, field, value) {
  var keys = Object.keys(object);
  keys.forEach(key => {
    if (typeof object[key] === "object") {
      if (key === field) {
        object[key] = value;
        return;
      }
      updateJsonObject(object[key], field, value);
    }else{
      if (key === field) {
        object[key] = value;
        return;
      }
    }
  });
};
export const updatePropOfObject = function(object, field, value) {
  var keys = Object.keys(object);
  keys.forEach(key => {
    if (typeof object[key] !== "object") {
      if (key === field) {
        object[key] = value;
        return;
      }
    } else {
      updateValueOfObject(object[key], field, value);
    }
  });
};

export const getPropOfObject = function(object, field) {
  let value = null;
  var keys = Object.keys(object);
  keys.forEach(key => {
    if (typeof object[key] !== "object") {
      if (key === field) {
        value = object[key];
      }
    } else {
      getPropOfObject(object[key], field);
    }
  });
  return value;
};

var objectValue;
export const getJsonObjectCover = function(object, field) {
  getJsonObject(object, field);
  return objectValue;
};

const getJsonObject = function(object, field) {
  var keys = Object.keys(object);
  keys.forEach(key => {
    if (typeof object[key] === "object") {
      if (key === field) {
        objectValue = object[key];
      } else {
        getJsonObject(object[key], field);
      }
    }else{
      if (key === field) {
        objectValue = object[key];
      }
    }
  });
};

export const convertObjectToArray = function(object) {
  var newArr = [];
  var keys = Object.keys(object); 
  keys.forEach(key => {
    let newObj = {
      filter: object.length? object[key].key: key,
      name: object[key].name,
      value: object[key].value
    };
    newArr.push(newObj);
  });
  //console.log(newArr)
  return newArr;
};

export const pushToArray = function(checkeds, items, hideCheckAll,parentId) {
  var newArr = checkeds;
  let lengthChecked = items.filter(item=> item.value===true);

  if((hideCheckAll===undefined || hideCheckAll===false) && lengthChecked.length === items.length && lengthChecked.length>1){
   
      if(typeof(items[0].value) =='boolean'){
        items[0].value = items[0].value===true? 3:1;
      }
    
  }
  for (let i = 0; i < items.length; i++) {  
    let arr = newArr.filter(d => items[i].filter == d.id)
    if(arr && arr.length > 0){     
      if((typeof(items[i].value) =='boolean' && items[i].value == false)){      
        newArr = newArr.filter(d => items[i].filter !== d.id)
      }
    }
    else{
      if(typeof(items[i].value) =='boolean' && items[i].value == true) 
        newArr.push({
          id: items[i].filter,
          name: items[i].name,
          parentId: parentId? parentId: undefined
        });
    }
  };
  return newArr;
};

export const updateArrayFillterByKey = function(array, filter, value) {
  if (array[0].filter === filter) {
    array.forEach(function(item) {
      item.value = value;
    });
  } else {
    let index = array.findIndex(obj => obj.filter === filter);
    array[index].value = value;

    array[0].value = false;
    for (let i = 1; i < array.length; i++) {
      if (array[i].value === true) {
        array[0].value = true;
        break;
      }
    }
    return array;
  }
  return array;
};
