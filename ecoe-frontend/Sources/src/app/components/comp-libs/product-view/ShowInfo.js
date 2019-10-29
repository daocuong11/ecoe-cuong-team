import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import iconBed from 'images/icons/product-view/bedroom.svg';
import iconBath from 'images/icons/product-view/toilet.svg';
import iconArea from 'images/icons/product-view/totalarea.svg';

const InfoProperties = styled.div`
  position: relative;
  font-family: ${props => props.number && props.theme.fontTypeFace.fontQuicksand};
  color: ${props => props.hyperlink ? props.theme.textColor.primaryGreen : props.theme.textColor.primaryBlue};
  font-weight: ${props => props.theme.fontWeight.bold};
  margin-top: ${props => props.icon ? "35px" : "25px"};
  top: ${props => props.hyperlink && '25px'};
  &:before {
    position: absolute;
    top: ${props => props.icon ? "-30px" : "-20px"};
    left: 0;
    ${props => props.icon ?
    ('content: url(' + props.icon + ');') :
    ('content: "' + props.label + '";')
  }

    font-size: ${props => props.theme.fontSize.small};
    font-weight: ${props => props.theme.fontWeight.regular};
    color: #7a869a;
    white-space: nowrap;
  }
`;

const ShowInfo = (props) => {
  let icon =
    props.labelIcon === "Phòng ngủ" ? iconBed :
      props.labelIcon === "Toilet" ? iconBath :
        props.labelIcon === "Diện tích" && iconArea;
  let _LABEL = props.label && props.label;
  let _TEXT = props.text ? props.text : "-";

  return (
    <Fragment>
      {props.link !== undefined ? (
        <InfoProperties hyperlink as="a" href={props.link} label={_LABEL}>
          {_TEXT}
          {props.children}
        </InfoProperties>
      ) : (
          <InfoProperties number={props.number} label={_LABEL} icon={icon}>
            {_TEXT}
            {props.children}
          </InfoProperties>
        )}

    </Fragment>
  );
}

ShowInfo.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
};

export default ShowInfo;