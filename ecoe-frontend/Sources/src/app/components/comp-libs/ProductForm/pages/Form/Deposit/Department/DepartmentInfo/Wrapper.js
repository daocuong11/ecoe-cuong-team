import styled from "styled-components";
import CheckBorder from 'UIElement/CheckBox/CheckBorder';
export const Wrapper = styled('div')
`
	max-width: 100%;
	padding-top: 100px;
    height: 100%;
`;

export const Description = styled('div')
`
	color: #8DA3C1;
	font-size: 14px;
	font-weight: bold;
    margin-top: 0px;
	padding-bottom: 20px;
`;

export const Title = styled.label `
    font-size: 16px;
    color: #0A2240;
    font-weight: bold;
    position: relative;
    user-select: none;
    
    &::before {
        content: '*';
        position: absolute;
        color: #DA6744;
        right:  ${props => props.large ? '-20px' : '-10px'};
        display: ${props => props.require ? 'block' : 'none'};
    }
    
    ~ *  {
    	margin-top: 10px;
    }
`;

export const Div = styled('div')``


export const CheckBoxWrap = styled('div')`
	margin-left: -15px;
	margin-right: -15px;
    display: block;
`;

export const CheckBox = styled(CheckBorder)`
	margin: 15px;
`;

export const CheckBoxBg = styled('div')`
    width: 169px;
    padding: 20px 10px 20px 10px;
    background-color:  #F4FDFD;
`
export const Center = styled('div')`
    text-align: center;
`
export const DotLine = styled('div')`
    border-style: dashed;
    border-color: #ADBDD1;
    border-width: 1px;
`
export const PdLeft = styled('div')`
    padding-left: 20px;
`
export const InsideContainer = styled('div')`
    width: 232px;
`
export const Flash = styled('div')`
    margin-top: 32px;
    margin-right: -5px;
    margin-left: -5px;
`

export const ContentSection = styled.div.attrs(({ column }) => ({
  w: (100/12)*column || 100,
  }))`
  display: inline-block;
  width: ${props=>props.w && props.w +'%'};
  padding-right: ${props=>props.paddingRight && "15px"};
  padding-left: ${props=>props.paddingLeft && "15px"};
  z-index: 1;
  
  @media (max-width: 700px) {
    width: ${props=>!props.hard && "100%"};
  }
`;

export const Position = styled('div')`
    position: fixed;
    top: 10px;
`
export const SectionItem = styled.div `
  margin-bottom: 30px;
`;

export const SelectWrapper = styled('div')`
    margin-top: -2px;
`