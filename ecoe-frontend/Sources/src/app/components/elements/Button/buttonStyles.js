import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.45em 2em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 15px;
  border: 1px solid #00837b;
  color: #00837b;
  margin-left: 5px;
  margin-right: 5px;
  &:active {
    background: #00837b;
    color: #fff;
  }
  &:hover{
    background: #00837b;
    color: #fff;
  }
`;

export default buttonStyles;
