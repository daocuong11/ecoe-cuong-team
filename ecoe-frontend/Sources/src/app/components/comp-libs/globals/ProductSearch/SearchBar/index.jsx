import React from 'react';
//import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import FilterSearchContainer from '../FilterSearchContainer';
import { SEARCH_LIST, CITIES, DISTRICTS, WARDS,BEDS,BATHS, CATEGORY } from "globalConstants/searchCritical";
import {getCategoryName} from 'constants/categorySearch';
import { withApollo } from 'react-apollo';
import { QUERY_SEARCH_CRITICAL } from "schemas/products/searchCritical";

const convertToObject = function(object, type, isArray) {
    var newArr = [];
    if(isArray){
        var keys = Object.keys(object); 
        keys.forEach(key => {
        let newObj = {
            id: object[key].id,
            name: object[key].name,
            label: object[key].name,
            value: object[key].id,
            type: type,
        };
        newArr.push(newObj);
        });
        return newArr;
    }else{
        
        if (object && object.min !== undefined && object.min !== object.max && object.max !== 0) {
            let newObj = {
                id: type,
                name: object.min + '-' + object.max +' '+ object.unit,
                label: object.min + '-' + object.max +' '+ object.unit,
                value: object.min + '-' + object.max +' '+ object.unit,
                type: type,
            };
            newArr.push(newObj);
        }
    }
    return newArr;
  };

const getShortName= function(name){
    let data = name.split(' ')
    let shortName=''    
    for(let i=1; i< data.length;i++){
        shortName = shortName +'.' + data[i];
    }
    if(data.length>0){
        shortName= data[0].substring(0,1)+ shortName;
    }
    return shortName;
};

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            searchList: [],
            productType: this.props.productType
        };
        this.removeItem = this.removeItem.bind(this);     
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        this.loadDataFromLocal();
        // this.setState({
        //     //productType: nextProps.productType
        // }, 
        //     ()=>{ this.loadDataFromLocal();
        // });
    }

    

    loadDataFromLocal(){
        if (
            this.props !== undefined &&
            this.props.data !== null &&
            this.props.data !== undefined
        ) {          
            let data=[];
            let category = this.props.data.getSearchCritical(CATEGORY);             
            
            for (let i = 0; i < SEARCH_LIST.length; i++) {
                if(SEARCH_LIST[i].key === CITIES){
                    let cities = this.props.data.getSearchCritical(CITIES);
                    let districts = this.props.data.getSearchCritical(DISTRICTS);
                    let wards = this.props.data.getSearchCritical(WARDS);     
                                
                    let name =[];
                    cities.forEach(city=>{
                        let shortName = city.name;
                        let districtsTmp = districts.filter(district=> district.parentId === city.id)
                        if(districtsTmp.length > 0){
                            districtsTmp.forEach(district=>{
                                district.name = shortName +' - '+ getShortName(district.name);
                                let wardsTmp = wards.filter(ward=> ward.parentId === district.id)
                                if(wardsTmp.length>0){
                                    wardsTmp.forEach(ward=>{
                                        name.push({
                                                id:  ward.id,
                                                name: district.name + ' - ' + getShortName(ward.name),
                                                label: district.name + ' - ' + getShortName(ward.name),
                                                value: ward.id,
                                                type: WARDS
                                            });
                                    });
                                }else{                                   
                                    name.push({
                                        id:  district.id,
                                        name: district.name,
                                        label: district.name,
                                        value: district.id,
                                        type: DISTRICTS
                                    });
                                }
                            })
                        }else{
                            name.push({
                                id:  city.id,
                                name: city.name,
                                label: city.name,
                                value: city.id,
                                type: CITIES
                            });
                        }
                        
                    });
                    data = data.concat(name);
                    
                }else if(SEARCH_LIST[i].key === CATEGORY && category!==""){
                    
                    data = data.concat({
                        id:  category,
                        name: category,
                        label: getCategoryName(category),
                        value: category,
                        type: CATEGORY
                    });
                }
                else{
                    if(SEARCH_LIST[i].type==='' || SEARCH_LIST[i].type=== this.state.productType){
                        var result = this.props.data.getSearchCritical(SEARCH_LIST[i].key);
                        if (result && result.length !== undefined){
                            if(SEARCH_LIST[i].key=== BEDS || SEARCH_LIST[i].key=== BATHS){
                                result.forEach(item=>{
                                    item.name = item.name +' '+ SEARCH_LIST[i].name;
                                })
                            }
                            data = data.concat(convertToObject(result, SEARCH_LIST[i].key , true));
                        }
                        else{
                            data = data.concat(convertToObject(result, SEARCH_LIST[i].key , false));
                        }
                    }
                }
            }
            if(data){
                this.setState({
                    searchList: data
                });
                let searchText = "";
                data.forEach(item=>{searchText+= " - "+item.label})
                console.log(searchText);
                this.props.client.writeData({
                data: {
                    searchText: searchText
                }
              });
            }
        }
    }
    removeItem = function(data){
        if (
            this.props !== undefined &&
            this.props.data !== null &&
            this.props.data !== undefined
        ) {   
            let obj = this.props.data.getSearchCritical(data.type);          
            if(typeof obj === "object"){   
                if(obj.length > 0){
                    //Handle if Component is 'cities'
                if(data.type=== CITIES){
                    let objDistricts = this.props.data.getSearchCritical(DISTRICTS); 
                    let objWards =this.props.data.getSearchCritical(WARDS); 
                    objDistricts.forEach(element => {
                        objWards = objWards.filter(item => item.parentId !== element.id);
                    });
                    objDistricts = objDistricts.filter(item=> item.parentId !== data.id);                    
                    this.props.data.updateSearchCritical(DISTRICTS, objDistricts, true);
                    this.props.data.updateSearchCritical(WARDS, objWards, true);
                }
                //Handle if Component is 'districts'
                else if(data.type===DISTRICTS){
                    let objWards =this.props.data.getSearchCritical(WARDS); 
                    objWards = objWards.filter(item=> item.parentId !== data.id);
                    this.props.data.updateSearchCritical(WARDS, objWards, true);
                }


                this.props.data.updateSearchCritical(data.type, obj.filter(item=> item.id !== data.id), true);

            }
            else{
                if(obj.min !== undefined){
                    obj.min=0;
                    obj.max=0;
                    this.props.data.updateSearchCritical(data.type, obj, true);
                }
            }
            }else{
                this.props.data.updateSearchCritical(data.type, "", true);
                if(data.type === CATEGORY){
                    localStorage.setItem("categorySearch","");
                }
            }
            this.props.removeItem && this.props.removeItem(data);
        }
    };

    render(){

    return (
        // <Wrapper>Tìm kiếm theo bộ lọc thông thường</Wrapper>
        <Wrapper>
            <FilterSearchContainer items={this.state.searchList} removeItem={this.removeItem}/>
        </Wrapper>
    );
    }
}

SearchBar.propTypes = {
    
};

export default withApollo(SearchBar);