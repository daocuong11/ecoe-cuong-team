import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RandomStyle = (high, low) => {
  return Math.floor(Math.random() * (high - low + 1) + low)
}

const AvatarFrame = styled.div.attrs(({size, brokerAvatar})=>({
  sizeFrame: size || 32,
  backgroundFrame: brokerAvatar,
  num: RandomStyle(6, 1),
  }))`

  display: block;
  float: left;  
  width: ${props => props.sizeFrame+'px'};
  height: ${props => props.sizeFrame+'px'};
  background: ${props => props.theme.avatarStyle[props.num].backgroundColor} url(${props => props.backgroundFrame}) 100% no-repeat;
  background-size: cover;
  border-radius: 50%;
  
  font-family: ${props=>props.theme.fontTypeFace.fontQuicksand};
  color: ${props => props.theme.avatarStyle[props.num].textColor};
  text-transform: uppercase;

  margin-right: -5px;
`;

const ShortName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${props => props.theme.fontWeight.semiBold};
  width: 100%;
  height: 100%;
`;

const AvatarRows = (props) => {
  return (
    <AvatarFrame size={props.size} brokerAvatar={props.brokerAvatar}>
      <ShortName>
        { !props.brokerAvatar && props.brokerName }
      </ShortName>
    </AvatarFrame>
  );
};

AvatarRows.propTypes = {
  size: PropTypes.number,
  brokerAvatar: PropTypes.string,
  brokerName: PropTypes.string,
};

export default AvatarRows;