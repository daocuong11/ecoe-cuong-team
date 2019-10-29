import styled from 'styled-components';
//import { Column } from '../globals/ProductSearch/AdvanceSearch/LandAdvance/Wrapper';
import { devices } from "globalUtils/styledUtils";

const Wrapper = styled.div`
  display: ${props => props.fix && "flex"};
  margin: 0 105px;
  padding: ${props => props.padding && "30px 0 0"};

  // @media (max-width: 1024px) {
  //   margin: 0;
  //   padding: 0;
  // }
  ${devices.sm`
    flex-direction: column;
    margin: 0;
    padding: 0;
  `}
  ${devices.md`
  flex-direction: column;
  margin: 0;
  padding: 0;
`}
  ${devices.lg`
  flex-direction: column;
  margin: 0;
  padding: 0;
  `}


`;

const WidthFull = styled.div`
  position: relative;
`;

const BG = styled.div`
  position: absolute;
  height: 52%;
  width: 100%;
  background: #eaf9fa;
  z-index: 0;
  ${devices.sm`
    height: 60%;
  `}
`;

const SectionItem = styled.div`
  margin-bottom: 30px;
`;

const ContentSection = styled.div.attrs(({ column }) => ({
  w: (100 / 12) * column || 100,
}))`
  display: inline-block;
  width: ${props => props.w && props.w + '%'};
  padding-right: ${props => props.paddingRight && "15px"};
  padding-left: ${props => props.paddingLeft && "15px"};

  //@media (max-width: 700px) {
    //width: ${props => !props.hard && "100%"};
    // padding: 0 15px;
  //}
  ${devices.sm`
  width: ${props => !props.hard && "100%"};
  order: ${props => props.order};
  padding-right: ${props => props.noPadding ? '0' : '15px'};
  padding-left: ${props => props.noPadding ? '0' : '15px'};
`}
${devices.md`
  width: ${props => !props.hard && "100%"};
  order: ${props => props.order};
  padding-right: ${props => props.noPadding ? '0' : '15px'};
  padding-left: ${props => props.noPadding ? '0' : '15px'};
`}
${devices.lg`
  width: ${props => !props.hard && "100%"};
  order: ${props => props.order};
  padding-right: ${props => props.noPadding ? '0' : '15px'};
  padding-left: ${props => props.noPadding ? '0' : '15px'};
`}

`;
const Link = styled.a`
color: ${props => props.theme.textColor.primaryGreen};
text-decoration: underline;
font-weight: ${props => props.theme.fontWeight.bold};
font-size: ${props => props.theme.fontSize.small};
&:hover {
  color: ${props => props.theme.textColor.primaryGreen};
}

&:active {
  color: ${props => props.theme.textColor.primaryGreen};
}
`;

const Unit = styled.div`
  display: inline-block;
  font-size: ${props => props.theme.fontSize.unit};
  /* padding-left: 5px; */
`;

export { Wrapper as default, WidthFull, BG, SectionItem, ContentSection, Link, Unit };