import styled from 'styled-components';

const Wrapper = styled.div``;

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
  ItemSearchChildContainer,
};