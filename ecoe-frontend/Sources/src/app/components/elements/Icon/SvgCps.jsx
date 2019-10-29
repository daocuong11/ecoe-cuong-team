import React from 'react';
import { Svg } from './Wrapper';
  
const SvgCps = (props) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} heightMobile={props.heightMobile} viewBox={props.viewBox} fill={props.fill} stroke={props.stroke} type={props.type} onClick={props.onClick} active={props.active}>
        {
            props.children
        }
        </Svg>
    )
};

export default SvgCps;