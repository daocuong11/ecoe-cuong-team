import styled from "styled-components";

export const Wrapper = styled('div')
`
	max-width: 680px;
	padding-top: 100px;
	@media(max-width: 480px) and (min-width: 320px) {
		max-width: 100%;
		padding-bottom:30px;
	}
`;

export const Description = styled('div')
`
	color: #8DA3C1;
	font-size: 14px;
	font-weight: bold;
	padding-top: 0px;
	padding-bottom: 20px;
`;

export const Div = styled('div')``