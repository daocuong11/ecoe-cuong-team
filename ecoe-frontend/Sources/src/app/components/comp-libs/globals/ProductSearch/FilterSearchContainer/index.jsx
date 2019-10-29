import React,{Component} from 'react';
import Wrapper from './Wrapper';
import PropTypes from 'prop-types';
import FilterItem from './FilterItem';
import RButtonCard from '../../Buttons/RButtonCard';

class FilterSearchContainer extends Component{
    constructor(props){
        super(props);
        this.state={items : props.items};
        this.removeItem = this.removeItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            items: nextProps.items
        });
    }
    removeItem = (data)=>{
       if(this.state.items.length ===0) return;
        this.setState({
            items: this.state.items.filter(item => !item.name.includes(data.name))
        });
        this.props.removeItem && this.props.removeItem(data);
    }
    addItem = ()=>{
        let listItems=  this.state.items;
        listItems.push({id:listItems.length+1,name:'test'+listItems.length,value:'test',label:'test'});
        this.setState({
             items: listItems
         });
     }

    render(){
        return (        
            <Wrapper>
                {
                    this.state.items.map((item) => (
                        <FilterItem name={item.name} label={item.label} key={item.name} type={item.type} id={item.id} removeItem={this.removeItem}/>
                        )
                    )
                } 
                {
                    this.props.showAdd?<RButtonCard label="Add" onClick={this.addItem} />:null
                }
                
            </Wrapper>
        )
    }
    
}

FilterSearchContainer.propTypes = {
    items: PropTypes.array,
};

export default FilterSearchContainer;