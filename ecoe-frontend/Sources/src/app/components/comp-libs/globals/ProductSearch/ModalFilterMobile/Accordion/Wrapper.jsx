import styled from "styled-components";

const Wrapper = styled.div``;

const Title = styled.div`
    position: relative;
    font-size: ${props=>props.theme.fontSize.medium18};
    font-weight: ${props=>props.theme.fontWeight.bold};
    color: ${props=>props.theme.textColor.primaryBlue};

    padding: 15px 0;
    margin-bottom: ${props=>props.marginBottom && "15px"};
    border-bottom: 1px solid #ccc;

    &::after {
        position: absolute;
        top: 30%;
        right: 0;
        content: url(${props=>props.icon});
    }
`;

const Container = styled.div`
    background: #e0f0fd;
    margin: ${props=>props.margin};
    padding: ${props=>props.padding};
    
`;

const ItemSearchChildContainer = styled.div`
  display: block;
  position: ${props=>props.openModalButton && "relative"};
  font-weight: bold;
  ${props => props.displayFlex !== undefined && props.displayFlex === true ? `
    width: calc(100% / ${props.col});
    box-sizing: border-box;`:
    ``
  }

  ${props => props.filterMobile && `
    font-size: ${props.theme.fontSize.medium18};
    color: ${props.theme.textColor.primaryBlue};
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #ccc;
  `}

  ${props => props.accordionButton && `
    font-size: ${props.theme.fontSize.medium};

    padding-left: 30px;
    margin-bottom: none;
    border-bottom: none;
  `}  
`;

export {
    Wrapper as default,
    Title, Container,ItemSearchChildContainer
};