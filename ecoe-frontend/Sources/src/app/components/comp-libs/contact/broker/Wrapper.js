import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import IconContact from "images/icons/icon-contact.svg";
import IconLeftActive from "images/icons/icon-left.svg";
import IconLeft from "images/icons/icon-left-hide.svg";

export const Wrapper = styled('div')`
	max-width: 100%;
    height: 100%;
`;

export const ContentSection = styled.div.attrs(({ column }) => ({
  w: (100/12)*column || 100,
  }))`
  display: inline-block;
  width: ${props=>props.w && props.w +'%'};
  padding-right: ${props=>props.paddingRight && "15px"};
  padding-left: ${props=>props.paddingLeft && "15px"};
  padding: ${props=>props.padding ? '50px' : '0px'};
  background-color: ${props => props.white ? '#ffff' : '#f4fbfc'};
  z-index: 1;
  
  @media (max-width: 700px) {
    width: ${props=>!props.hard && "100%"};
  }
`;

export const Label = styled.label `
    font-size: ${props => props.large ? '24px' : '14px'};
    color: #0A2240;
    font-weight: ${props => props.bold ? '900' : 'bold'};
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

export const Button = styled.button `
    padding: 12px 24px;
    outline: 0;
    border: 1px solid #00837B;
    color: #00837B;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    background: #fff;
    width: 166px;
    font-weight: bold;
    font-family: 'Quicksand';
    height: ${props=> props.header? '64px' : '40px'};
    margin-left: ${props=>props.left && props.left + 'px'};
    font-size: ${props=> props.header? '18px' : '14px'};

    &:active {
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.175);
        border: none;
    }
`
export const Inline = styled.div `
    display: flex;
`

export const Title = styled.div `
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 50px;
`

export const ContactIcon = styled.div `
    background: url(${IconContact}) no-repeat center;
    background-size: 40px;
    width: 70px;
    height: 70px;
    margin-left: -16px;
`

export const ContactContainer = styled.div `
    width: 166px;
    right: 75%;
    top: 30%;
    position: fixed;
`

export const Ul = styled.ul `
    list-style-type: none;
`

export const Li = styled.li `
    padding-bottom: 5px;
    padding-top: 5px;
    color: #0A2240;
    font-size: 14px;
    font-family: 'Quicksand';
    font-weight: bold;
    text-transform: uppercase;
    ${({ active }) => active && `
        color: #00837B;
    `}
    ::after {
        content: '';
        background: url(${props => props.active ? IconLeftActive : IconLeft}) no-repeat center;
        width: 30px;
        height:30px;
        margin-top: -4px;
        right: 0;
        position: absolute;
    }
`

export const Line = styled.div `
    border-bottom: 2px solid #00837B;
`

export const SortContainer = styled.div `
    position: absolute;
    right: 8%;
    margin-top: 8px;
`

export const CheckAllWrap = styled.div `
    padding-top: 8px;
    padding-bottom: 8px;
    ${props => props.hidden && css`
        display: none;
    `}
`;

export const ActionContainer = styled.div `
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #E7EFF0;
    padding: 3px 0px 3px 0px;

`

export const ContactSection = styled.div `
    border-bottom: 1px dashed #CFD9E6;
    padding-bottom: 20px;
    > div {
        display: flex;
        > label {
            margin-top: 37px;
        }
    }    
`


Label.propTypes = {
    large: PropTypes.bool,
    require: PropTypes.bool,
    bold: PropTypes.bool,
    w: PropTypes.number
};

Button.propTypes = {
    height: PropTypes.bool,
    left: PropTypes.number
};