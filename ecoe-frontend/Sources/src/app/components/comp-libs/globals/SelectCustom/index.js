import React from 'react';
import PropTypes from 'prop-types';
import Wrapper,{Select} from './Wrapper';
import * as _ from "lodash";

class SelectCustom extends React.Component {
    constructor(props){
        super(props);
        let selectedIndex = _.findIndex(props.items, {value: _.get(props,'defaultValue')});
        selectedIndex = selectedIndex>0 ? selectedIndex : 0;
        this.state={
            selectedIndex: selectedIndex,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount(){
        let value = _.get(this.props.items[this.state.selectedIndex],'value');
        this.props.onChange && this.props.onChange(value);     
    }
    
    initControl(){
        
    }

    handleChange(e){
        this.props.onChange && this.props.onChange(e.target.value)       
    }

    render(){
        const {selectedIndex} = this.state;
        return (
            <Wrapper>
                <Select onChange={this.handleChange} >
                {
                    _.map(this.props.items,(item,index)=>{
                        return <option selected={index===selectedIndex} value={item.value}>{item.name}</option>
                    })
                }
                </Select>
            </Wrapper>
        );
    }
}

SelectCustom.propTypes ={
    items: PropTypes.array,
    selectedIndex: PropTypes.number,
    defaultValue: PropTypes.object
}

export default SelectCustom;