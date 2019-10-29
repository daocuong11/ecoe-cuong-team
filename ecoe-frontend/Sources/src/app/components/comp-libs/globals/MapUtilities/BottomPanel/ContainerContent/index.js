import React from 'react';
import PropTypes from 'prop-types';
import Wrapper,{Item, Name, Distance} from './Wrapper';
import * as _ from "lodash";

const ContainerContent = (props) => {
    let items= _.filter(props.items,{type : props.type});
  return (
    <Wrapper>
        {
          items.map((item,index) =>{
            return (
              <Item key={index}>
                <Name title={item.name}>{item.name}</Name>
                <Distance>{item.distance}</Distance>
              </Item>)
          })
        }
    </Wrapper>
  );
}

ContainerContent.propTypes = {
    items: PropTypes.array,
    type: PropTypes.string
};

export default ContainerContent;