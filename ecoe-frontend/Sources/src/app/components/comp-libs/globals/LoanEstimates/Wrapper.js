import styled from 'styled-components';
import { devices } from '../../../../../ultils/styledUtils';

const Wrapper = styled.div``;

const TitleSection = styled.div`
    font-size: ${props => props.theme.fontSize.sectionTitle};
    color: ${props => props.theme.textColor.primaryBlue};
    font-weight: ${props => props.theme.fontWeight.bold};
    padding-top: 50px;
    padding-bottom: 25px;
    border-bottom: 1px dashed #CCC;
`;

const Description = styled.div`
margin-bottom: 50px;
margin-top: 10px;
color: #778FAF;
font-size: ${props => props.theme.fontSize.small};
font-style: italic;
`;
const WrapperLabel = styled.div`
  position: relative;
  color: ${props => props.theme.textColor.primaryBlue};
  font-weight: ${props => props.theme.fontWeight.bold};
  &:after {
    margin-left: 5px;
    content: "${props => props.unit}";
    color: #778FAF;
  }
  ${devices.sm`
  padding: 20px 0px;
`}

`;

const WrapperCheckbox = styled.div`
span{
font-size: ${props => props.theme.fontSize.normal};
color: #778FAF;
font-weight: ${props => props.theme.fontWeight.semiBold};
}
`;

const WrapperRow = styled.div`
padding: 20px 0;
// display:flex;
// justify-content: center;
// align-content: center;
// align-items: center;
`;

const ContentSection = styled.div.attrs(({ column }) => ({
    w: (100 / 12) * column || 100,
  }))`
    display: inline-block;
    width: ${props => props.w && props.w + '%'};
    padding-right: ${props => props.paddingRight && "15px"};
    padding-left: ${props => props.paddingLeft && "15px"};
    ${devices.sm`
      width: ${props => !props.hard && "100%"};
    `}
  `;

const Rate= styled.div`
font-size: ${props => props.theme.fontSize.large};
color: #183253;
font-weight: ${props => props.theme.fontWeight.bold};
font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
text-align: right;
`;

export { Wrapper as default, TitleSection,ContentSection,Description,WrapperCheckbox,WrapperLabel,WrapperRow,Rate};