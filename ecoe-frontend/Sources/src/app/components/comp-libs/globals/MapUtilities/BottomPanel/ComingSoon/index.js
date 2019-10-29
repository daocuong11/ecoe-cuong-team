import React from 'react';
import PropTypes from 'prop-types';
import Img from '../../../../../elements/Img';
import icon_comingsoon from '../../../../../../images/map-utilities/icon-comingsoon.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
text-align: center;
position: absolute;
left: 0;
top: 50%;
transform: translate(0%, -50%);
padding: 46px;
`;
const Title = styled.div`
color: ${props=>props.theme.textColor.primaryGreen};
font-size: ${props=>props.theme.fontSize.large};
font-weight: ${props=>props.theme.fontWeight.extraBold};
text-transform: uppercase;
padding-top: 39px;
padding-bottom: 10px;
`;
const Description = styled.div`
color: #183253;
font-size: ${props=>props.theme.fontSize.normal};
`;

const ComingSoon = (props) => {
  return (
    <Wrapper>
      <Img src={icon_comingsoon}/>
      <Title>COMING SOON!</Title>
      <Description>Tính năng này sẽ ra mắt trong thời gian sớm nhất.  Stay tuned!</Description>
    </Wrapper>
  );
}

ComingSoon.propTypes = {
};

export default ComingSoon;