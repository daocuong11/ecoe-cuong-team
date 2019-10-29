import styled from 'styled-components';

export const Wrapper = styled.div `
    display: flex;
    position: relative;
    width: 100%;
    height: 80px;
    border-bottom: 2px solid #00837b;
    padding-top: 26px;
`

export const Description = styled('div')
`
	color: #AAB1B9;
	font-size: 16px;
	font-weight: bold;
    padding-bottom: 20px;
    margin-top: 10px;
    margin-left: 6px;
    font-family: 'Quicksand';
`;

export const Title = styled.label `
    font-size: 20px;
    color: #0A2240;
    font-weight: 600;
    position: relative;
    user-select: none;
    margin-top: 10px;
`;

export const Button = styled.button `
    padding: 10px 24px;
    outline: 0;
    border: 1px solid #00837B;
    color: #00837B;
    font-size: 14px;
    font-weight: bold;
    font-family: 'Quicksand';
    text-transform: uppercase;
    cursor: pointer;
    background: #fff;
    width: 155px;
    height: 40px;
    right: 5%;
    position: absolute;
`