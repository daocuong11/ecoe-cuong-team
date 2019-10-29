import React from "react";
import { ItemSearchChildContainer } from "./Wrapper";
import CheckBox3 from "../../../../elements/CheckBox/Checkbox3";
import withListing from "../withListing";

const AccordingSearch = (props) => {
  return props.arrFilter.map(itemFilter => {
    return (
        <ItemSearchChildContainer
          filterMobile={props.filterMobile}
          openModalButton={props.openModalButton}
          accordionButton={props.accordionButton}
          itemFilter={itemFilter}
          key={itemFilter.filter}
          value={itemFilter.value}
          hideIcon={props.hideIcon}
          hideCheckAll={props.hideCheckAll}
          displayFlex={props.displayFlex}
          col={props.col}
        >
          <CheckBox3
            filterMobile={props.filterMobile}
            key={itemFilter.key}
            filter={itemFilter.filter}
            name={itemFilter.name}
            value={itemFilter.value}
            updateCheckbox={props.updateCheckbox}
            handleClick={props.handleClick}
          />
          {
            (props.openModalButton && itemFilter.value) && props.children
          }
        </ItemSearchChildContainer>
    );
  });

}

export default withListing(AccordingSearch);
