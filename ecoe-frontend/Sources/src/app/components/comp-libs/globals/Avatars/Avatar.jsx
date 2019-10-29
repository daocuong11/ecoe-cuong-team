import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RandomStyle = (high, low) => {
  return Math.floor(Math.random() * (high - low + 1) + low)
};

const AvatarFrame = styled.div.attrs(({size, brokerAvatar})=>({
  sizeFrame: size || 32,
  backgroundFrame: brokerAvatar,
  num: RandomStyle(6, 1),
  }))`

  display: inline-block;  
  width: ${props => props.sizeFrame+'px'};
  height: ${props => props.sizeFrame+'px'};
  background: ${props => props.theme.avatarStyle[props.num].backgroundColor} url(${props => props.backgroundFrame}) center no-repeat;
  background-size: cover;
  border-radius: 50%;
  
  font-family: ${props=>props.theme.fontTypeFace.fontQuicksand};
  color: ${props => props.theme.avatarStyle[props.num].textColor};
  text-transform: uppercase;
`;

const ShortName = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  font-weight: ${props => props.theme.fontWeight.semiBold};
`;

const Avatar = (props) => {
  let brokerAvatar = props.broker ? props.broker.brokerAvatar : props.brokerAvatar;
  let brokerName = props.broker ? props.broker.brokerName : props.brokerName;
  
  let shotName = !brokerAvatar && (brokerName ? brokerName : "NA") ;
  return (
    <AvatarFrame size={props.size} brokerAvatar={brokerAvatar}>
      <ShortName>{shotName}</ShortName>
    </AvatarFrame>
  );
};

Avatar.propTypes = {
  size: PropTypes.number,
  brokerAvatar: PropTypes.string,
  brokerName: PropTypes.string,
  broker: PropTypes.object,
};

export default Avatar;