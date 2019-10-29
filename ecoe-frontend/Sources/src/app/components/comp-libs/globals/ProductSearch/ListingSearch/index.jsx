import React from "react";
import { ItemSearchChildContainer } from "./Wrapper";
import CheckBox3 from "../../../../elements/CheckBox/Checkbox3";
import withListing from "../withListing";
import * as _ from "lodash";

const ListingSearch=(props) => {
    return _.map(props.arrFilter,itemFilter => {
      return (
        <ItemSearchChildContainer
          itemFilter={itemFilter}
          key={itemFilter.filter}
          value={itemFilter.value}
          hideIcon={props.hideIcon}
          hideCheckAll={_.get(props,'hideCheckAll')}
          displayFlex ={_.get(props,'displayFlex')}
          col={_.get(props,'col')}
        >
          <CheckBox3
            key={itemFilter.key}
            filter={itemFilter.filter}
            name={itemFilter.name}
            value={itemFilter.value}
            updateCheckbox={_.get(props, 'updateCheckbox')}
            handleClick={_.get(props,'handleClick')}
          />
        </ItemSearchChildContainer>
      );
    });
}

export default withListing(ListingSearch);
