import styled from 'styled-components';

import { 
  ACT_SHARING_SOCIAL_NET,
  ACT_COMPARISONS,
  ACT_EDIT,
  ACT_DELETE,
  ACT_HIDDEN,
  ACT_SHOW,
  ACT_HIGHLIGHT,
  ACT_UNHIGHLIGHT } from "constants/labelActionForCard";
import iconChiase from 'images/icons/card/icon-share-social.svg';
import iconCompare from 'images/icons/card/icon-compare.svg';
import iconEdit from 'images/icons/card/icon-edit.svg';
import iconDelete from 'images/icons/card/icon-delete.svg';
import iconShow from 'images/icons/card/icon-show.svg';
import iconHidden from 'images/icons/card/icon-hidden.svg';
import iconHighlight from 'images/icons/card/icon-highlight.svg';
import iconUnHighlight from 'images/icons/card/icon-unhighlight.svg';

const Wrapper = styled.div``;

const Item = styled.div`
  display: inline-block;
  padding: ${props=> props.group==="Management" ? "5px 20px" : "0 15px 0 0"};

  &:last-child {
    padding-right: 0;
  }
`;

const P = styled.div`
  position: relative;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: ${props => props.theme.fontWeight.bold};
  font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
`;

const LabelButtonLeft = styled(P)`
  padding-left: 20px;
  color: ${props => props.theme.textColor.primaryGreen};

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: url(${props=> 
      (props.label===ACT_SHARING_SOCIAL_NET && iconChiase) || 
      (props.label===ACT_COMPARISONS && iconCompare) ||
      (props.label===ACT_EDIT && iconEdit) ||
      (props.label===ACT_DELETE && iconDelete) ||
      (props.label===ACT_SHOW && iconShow) ||
      (props.label===ACT_HIDDEN && iconHidden) ||
      (props.label===ACT_HIGHLIGHT && iconHighlight) ||
      (props.label===ACT_UNHIGHLIGHT && iconUnHighlight)      
    });
    width: 10px;
    height: 10px;
    padding-right: 6px;
  }
`;

const LabelButtonRight = styled(P)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 1.2rem;
`;

const StyleRightButton = styled.div.attrs(({type})=>({
  Type: type==="3" ? "2" : (type==="2" ? "1" : "0") || "0",
  }))`
  
  display: inline-block;
  height: ${props => props.className==="pushProduct" ? "50px" : "32px" };
  background: ${props => props.theme.cardButtonStyle[props.Type].background};
  border: ${props => props.theme.cardButtonStyle[props.Type].border};
  color: ${props => props.theme.cardButtonStyle[props.Type].color};
  cursor: pointer;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  
  &:active {}
  
  &:hover{
    background: ${props => props.Type === "0" ? props.theme.cardButtonStyle[props.Type].hover: ''}; 
    border-color: ${props => props.Type === "1" ? props.theme.cardButtonStyle[props.Type].hover: ''}; 
    color: ${props => props.Type === "1" ? props.theme.cardButtonStyle[props.Type].hover: ''}; 
  }
`;

const StyleLeftButton = styled.div`    
  display: inline-block;
  height: 20px;
  /*
  background: #fff;
  border: 1px solid #c6e3e1;
  border-radius: 3px;
  */
  color: #677689;

  cursor: pointer;
  /*
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  */
  &:active {}
  
  &:hover{
    color: ${props => props.theme.textColor.primaryGreen};
  }
`;

export { Wrapper as default, Item, StyleRightButton, StyleLeftButton, LabelButtonLeft, LabelButtonRight };