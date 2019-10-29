import styled from "styled-components";

export const Wrapper = styled('div')`
	max-width: 100%;
  padding-top: 100px;
  @media(max-width: 480px) and (min-width: 320px) {
		max-width: 100%;
		padding-bottom:30px;
	}

`;

export const Description = styled('div')`
	color: #8DA3C1;
	font-size: 14px;
	font-weight: bold;
  margin-top: 0px;
	padding-bottom: 20px;
`;

export const Div = styled('div')``

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
    top: 230px;
`