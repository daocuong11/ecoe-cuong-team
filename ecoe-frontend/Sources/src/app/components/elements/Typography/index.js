import styled from 'styled-components';
import { LABEL_PROJECT } from "constants/labelActionForCard";

export const TextDefault = styled.div``;

// export const TextDefine = styled.div.attrs(({font,size,weight,color,background})=>({
//   Font: font || "fontMuli",
//   Size: size || "normal",
//   Weight: weight || "regular",
//   Color: color || "primaryBlue",
//   Background: background || "White"
// }))`
//   font-family: ${props => props.theme.fontTypeFace.Font};
//   font-size: ${props => props.theme.fontSize.Size};
//   font-weight: ${props => props.theme.fontWeight.Weight};
//   color: ${props => props.theme.textColor.Color};
// `;

export const TextMuli16ExBoldBlue = styled.div`
  font-family: ${props => props.theme.fontTypeFace.fontMuli};
  font-weight: ${props => props.theme.fontWeight.extraBold};
  color: ${props => props.theme.textColor.primaryBlue};
  font-size: ${props => props.theme.fontSize.medium};
  line-height: 1.7;
`;

export const TextQuicksand12BoldBlue = styled.div`
  font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
  font-size: ${props => props.theme.fontSize.small};
  font-weight: ${props => props.theme.fontWeight.bold};
  color: ${props => props.theme.textColor.primaryBlue};
`;

export const TextMuli10Regular = styled.div`
  display: inline-block;
  font-family: ${props => props.theme.fontTypeFace.fontMuli};
  font-weight: ${props => props.theme.fontWeight.regular};
  color: ${props => props.theme.textColor.primaryBlue};
  font-size: ${props => props.theme.fontSize.unit};
  
`;

export const H1 = styled.h1`
  font-size: 3.4rem;
  line-height: 5.1rem;
  font-weight: ${props => props.theme.fontWeight.extraBold};
`;

export const H2 = styled.h2`
  font-size: 2.8rem;
  line-height: 4.2rem;
  font-weight: ${props => props.theme.fontWeight.extraBold};
`;

export const H3 = styled.h3`
  font-size: 2.4rem;
  line-height: 3.6rem;
  font-weight: ${props => props.theme.fontWeight.extraBold};
`;

export const H4 = styled.h4`
  font-size: ${props => props.theme.fontSize.large};
  line-height: 3rem;
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export const SubText = styled.div`
  font-size: ${props => props.theme.fontSize.small};
  line-height: 1.8rem;
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export const Button = styled.div`
  font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
  font-size: ${props => props.theme.fontSize.normal};
  line-height: 2.1rem;
  font-weight: ${props => props.theme.fontWeight.bold};
  text-transform: uppercase;
`;

export const TitleOnForm = styled.div`
  font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
  font-size: ${props => props.theme.fontSize.medium};
  line-height: 2.4rem;
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export const BodyForm = styled.div`
  font-size: ${props => props.theme.fontSize.normal};
  line-height: 2.1rem;
  font-weight: ${props => props.theme.fontWeight.regular};
`;

export const HintText = styled(BodyForm)`
  font-family: ${props => props.theme.fontTypeFace.fontMuli};
  color: ${props => props.theme.textColor.secondaryH};
`;

export const DescriptionSection = styled(HintText)`
  font-family: ${props => props.theme.fontTypeFace.fontMuli};
  color: ${props => props.theme.textColor.primaryBlue};
  padding: ${props=>props.padding && "0 0 30px"};
`;

export const Link = styled(BodyForm)`
  color: ${props => props.theme.textColor.information};
  border-bottom: 1px solid ${props => props.theme.textColor.information};
  cursor: pointer;
`;

export const Caption = styled.div`
  font-size: ${props => props.theme.fontSize.small};
  line-height: 1.8rem;
  font-weight: ${props => props.theme.fontWeight.regular};
  font-style: italic;
`;

export const Error = styled(Caption)`
  color: ${props => props.theme.textColor.error};
`;

export const Navigation = styled.div`
  font-size: ${props => props.theme.fontSize.normal};
  line-height: 2.1rem;
  font-weight: ${props => props.theme.fontWeight.extraBold};
  text-transform: uppercase;
`;

export const TabText = styled.div`
  font-size: ${props => props.theme.fontSize.small};
  line-height: 1.8rem;
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export const OverLine = styled(TabText)`
  font-weight: ${props => props.theme.fontWeight.regular};
  text-transform: uppercase;
`;

export const Number = styled.div.attrs(({size, styleW})=>({
  fontSize: size || "1.4rem",
  fontStyle: styleW || "700",
}))`
  font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontStyle};    
`;

export const NaviSection = styled(Number)`
  text-transform: uppercase;
  color: #778FAF;
  cursor: pointer;
`;

// export const TitleCard = styled(TextMuli16ExBoldBlue)`
//   font-size: ${props => props.productType==="Project" && props.theme.fontSize.projectTitle};
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   cursor: pointer;
// `;

// export const AddressCard = styled(TextQuicksand12BoldBlue)`
//   font-weight: ${props => props.theme.fontWeight.regular};
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
// `;

export const TitleCard = styled.div`
    font-family: ${props => props.theme.fontTypeFace.fontMuli};
    font-weight: ${props => props.theme.fontWeight.extraBold};
    color: ${props => props.theme.textColor.primaryBlue};
    font-size: ${props => props.productType === LABEL_PROJECT ? props.theme.fontSize.projectTitle : props.theme.fontSize.medium};
    line-height: 1.7;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
`;

export const AddressCard = styled.div`
    font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
    font-size: ${props => props.theme.fontSize.small};
    font-weight: ${props => props.theme.fontWeight.regular};
    color: ${props => props.theme.textColor.primaryBlue};
    
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;