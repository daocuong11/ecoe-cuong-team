import styled from 'styled-components';
import { ContentSection } from '../Wrapper';
import { devices } from "globalUtils/styledUtils"; 

const Wrapper = styled.div``;

const TitleSection = styled.div`
    font-size: ${props=>props.theme.fontSize.sectionTitle};
    color: ${props=>props.theme.textColor.primaryBlue};
    font-weight: ${props=>props.theme.fontWeight.bold};
    padding: 50px 0;
`;

const Item = styled.div`
    display: inline-block;
    width: calc((100%)/5);
    text-align: center;
    padding: 25px 30px;
    box-sizing: border-box;

    &:nth-child(5n+1){ padding-left: 0; }
    &:nth-child(5n){ padding-right: 0; } 

  ${devices.sm`
  width: calc((100%)/3);
  padding: 20px 0px;
  `}
`;

const Icon = styled.div`
    display: block;
    position: relative;
    z-index: 2;
`;

const Text = styled.div`
    display: block;
    position: relative;
    z-index: 1;
    width: 100%;
    padding-top: 20px;

    font-size: ${props => props.theme.fontSize.normal};
    font-weight: ${props => props.theme.fontWeight.bold};
    color: ${props => props.theme.textColor.primaryBlue};
    
    > p {
        display: flex;
        justify-content: center;
    }
    
    &:before {
        content:"";
        position: absolute;
        width: 40px;
        height: 40px;
        background: #dbf3f4;
        border-radius: 50%;
        top: -50px;
        left: 40%;
    }
`;

export { Wrapper as default, TitleSection, Item, Icon, Text };