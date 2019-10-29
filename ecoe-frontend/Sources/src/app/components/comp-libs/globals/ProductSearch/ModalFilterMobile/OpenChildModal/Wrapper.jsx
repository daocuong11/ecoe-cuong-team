import styled from "styled-components";

const Wrapper = styled.div`
    font-size: ${props=>props.theme.fontSize.medium18};
    font-weight: ${props=>props.theme.fontWeight.bold};
    color: ${props=>props.theme.textColor.primaryBlue};

    padding: 15px 0;
    border-bottom: 1px solid #ccc;

    &::after {
    content: url(${props=>props.icon});
        float: right;
    }
`;

export {
    Wrapper as default,
};