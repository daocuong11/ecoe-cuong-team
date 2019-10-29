import styled from 'styled-components';
import { SD_BO } from "constants/domainType";

const Wrapper = styled.div`
  display: inline-block;
  margin-right: 15px;
  
  &:last-child {
    margin-right: 0;
  }
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-transform: uppercase;
  font-weight: 700;
`;

const ButtonStyle = styled.div.attrs(({type, domainType, isSearchResultPage})=>({
  Type: type || "0",
  color: isSearchResultPage ? "#fff" : domainType === SD_BO ? "#134169" : "#00837b",
  background: isSearchResultPage ? "#00837b " : "#fff",
  }))`
  display: inline-block;
  /* 
  background: ${props => props.theme.buttonStyle[props.Type].background};
  border: ${props => props.theme.buttonStyle[props.Type].border}; 
  color: ${props => props.theme.buttonStyle[props.Type].color}; 
  */
  height: ${props => props.className==="pushProduct" ? "40px" : "32px" };
  background: ${props => props.background};
  
  font-family: ${props => props.Type === "0" && props.theme.fontTypeFace.fontQuicksand}; 
  font-size: ${props => props.theme.fontSize.normal}; 
  color: ${props => props.color};
  cursor: pointer;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  
  &:active {}
  
  &:hover{
    background: ${props => props.Type === "0" ? props.theme.buttonStyle[props.Type].hover: ''}; 
    border-color: ${props => props.Type === "1" ? props.theme.buttonStyle[props.Type].hover: ''}; 
    color: ${props => props.Type === "1" ? props.theme.buttonStyle[props.Type].hover: ''}; 
  }
`;

export { Wrapper as default, Name, ButtonStyle };