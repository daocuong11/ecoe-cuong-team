import styled from 'styled-components';
import { devices } from "globalUtils/styledUtils"; 

const Wrapper = styled.div``;

const Svg = styled.svg.attrs(({type, active, heightMobile, heigth}) => ({
Type: type || 1,
Active: active || false,
HeightMobile : heightMobile || heigth
}))`
cursor: pointer;
  ${props => props.Active && props.Type===4 &&  `
    fill: ${props.theme.iconStyle[props.type].colorHover};
    background: #fff;`
  }
  ${props => !props.Active && `fill: ${props.theme.iconStyle[props.type].colorDefault};`}

  ${props => props.Type===4 && `
    width: 100%;
    padding: 25px 0;
    box-sizing: content-box;`
  }
 
  &:hover {
    fill: ${props => props.theme.iconStyle[props.type].colorHover};
    // ${props => props.Type===4 && `background: #fff;`}
  }

  &:active {
    fill: ${props => props.theme.iconStyle[props.type].colorActive};
  }

  ${devices.sm`
    height: ${props=> props.HeightMobile+'px'};
    ${props => props.Type===4 && `
      padding: 13px 0;`
    }
  `}
  ${devices.md`
    height: ${props=> props.HeightMobile+'px'};
    ${props => props.Type===4 && `
      padding: 13px 0;`
    }
  `}
  ${devices.lg`
    height: ${props=> props.HeightMobile+'px'};
    ${props => props.Type===4 && `
      padding: 13px 0;`
    }
  `}
`;

export { Wrapper as default, Svg }