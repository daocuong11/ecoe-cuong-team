import React from 'react';
import Avatar from './Avatar';

import Wrapper, { Item } from './Wrapper';
import PropTypes from 'prop-types';

const Avatars = (props) => {
  let avatarItems = [];
  let numberItem;
  let avatarHide;

  if (props.arrayBroker === undefined || props.arrayBroker === null) {

  }
  else {
    numberItem = props.numberItem ? props.numberItem : 5;
    avatarHide = props.arrayBroker.length - numberItem;
    for (let i = 0; i < props.arrayBroker.length; i++) {
      if (i === numberItem) {
        avatarItems.push(
          <Item viewType={props.viewType} size={props.size}>
            <Avatar key={i} size={props.size} brokerAvatar={""} brokerName={"+" + avatarHide} />
          </Item>
        );
        break;
      } else {
        avatarItems.push(
          <Item viewType={props.viewType} size={props.size}>
            <Avatar key={i} size={props.size} brokerAvatar={props.arrayBroker[i].brokerAvatar} brokerName={props.arrayBroker[i].brokerName} />
          </Item>
        );
      }
    }
  }
  return (
    <Wrapper>
      {avatarItems}
    </Wrapper>
  );
}

Avatars.propTypes = {
  size: PropTypes.number,
  numberItem: PropTypes.number,
  arrayBroker: PropTypes.array,
  viewType: PropTypes.string
};

export default Avatars;