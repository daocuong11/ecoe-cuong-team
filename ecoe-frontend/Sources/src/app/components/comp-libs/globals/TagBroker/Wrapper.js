import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Column = styled.div`
    margin-right: ${props=>props.leftCol && "15px"};
`;

const Title = styled.div`
    font-size: 11px;
    color: #748CAD;
    line-height: 1;
`;

const Name = styled.div`
    font-weight: ${props => props.theme.fontWeight.bold};
    color: ${props => props.theme.textColor.primaryBlue};
    font-size: ${props => props.theme.fontSize.normal};
    text-transform: capitalize;
    line-height: 2;

    max-width: 230px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;    
`;

const Phone = styled.div`
    font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
    font-size: ${props => props.theme.fontSize.medium};
    font-weight: ${props => props.theme.fontWeight.bold};
    color: ${props => props.theme.textColor.primaryGreen};
    line-height: 1;
    cursor: pointer;
`;

export { Wrapper as default, Column, Title, Name, Phone };