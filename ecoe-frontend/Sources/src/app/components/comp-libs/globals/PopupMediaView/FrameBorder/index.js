import React from "react";
import Wrapper, { IFRAME } from "./Wrapper";
import *  as _ from 'lodash';

const FrameContent = (props) => {
    let url = _.get(props.item,'data');
    return (
        <Wrapper>
            <IFRAME title={props.name} src={url} height={'100%'} width={'100%'} fullSize={props.fullSize} />
        </Wrapper>
    )
}


export default FrameContent;