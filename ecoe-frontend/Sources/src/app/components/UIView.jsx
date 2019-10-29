import React from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";

const Wrapper = styled.div`
    display: flex;
    padding: 15px 0;
    border-top: #ccc 1px dotted;
    &:first-child {
        margin-top: 30px;
        border-top: none;
    }
`;
const ComponentView = styled.div`
    width : 30%;
    float: left ;
    padding-left: 15px;
`;
const DescriptionView = styled.div`
    width : calc(70% - 30px);
    float: right ;  
    padding-left: 20px;
`;

const UIView = (props) => {
    return (
        <Wrapper>
            <ComponentView>{props.component}</ComponentView>
            <DescriptionView>{props.description}</DescriptionView>
        </Wrapper>
    )
}
export default UIView;

UIView.propTypes ={
    component: PropTypes.object,
    description: PropTypes.string
};