import styled from 'styled-components';

const Wrapper = styled.div`
border: 0;
position: relative;
z-index: 99;
background: transparent;
`;

const Select = styled.select`
border: none;
background: transparent;
width: 100%;
border-bottom: 1px solid #CCC;
height: 40px;
padding: 5px;
color: #253858;
font-weight: ${props => props.theme.fontWeight.bold};
&:after {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background: #34495e;
    cursor: pointer;
    pointer-events: none;
    -webkit-transition: .25s all ease;
    -o-transition: .25s all ease;
    transition: .25s all ease;
  }
`;


export { Wrapper as default,Select };