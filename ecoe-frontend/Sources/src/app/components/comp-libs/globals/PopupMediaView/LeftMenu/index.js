import React from "react";
import Wrapper,{WrapperButton} from "./Wrapper";
import {IconMedia } from "../../../../elements/Icon";

// const Photo ='PHOTO';
// const View360 ='360';
// const Video ='VIDEO';
// const View3D ='3D';
// const StreetView ='STREETVIEW';

class LeftMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state={
           menuItems: props.menuItems,
           activeIndex: props.menuItems ? props.menuItems.findIndex(item=>item.key=== props.active):0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(data,e){
        const {menuItems}= this.state;
       this.setState({
           activeIndex: menuItems.findIndex(item=> item.key=== data.key),
       },()=>{
           this.props.onClick(data);
       });

    }

    render(){
        const{menuItems,activeIndex} = this.state;
        return (
            <Wrapper>
                {
                menuItems.map((item, index) => (
                    
                    <WrapperButton key={item.key}>
                        <IconMedia icon={item.key} type={4} height={50} heightMobile={40} active={index===activeIndex} onClick={this.handleClick.bind(this,item)}/>      
                    </WrapperButton>  
                    )
                )}
            </Wrapper>
        )
    }
    }

export default LeftMenu;