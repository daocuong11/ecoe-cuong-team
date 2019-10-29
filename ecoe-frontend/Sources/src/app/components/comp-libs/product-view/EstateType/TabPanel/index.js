import React from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs';
import Wrapper, { TitleTab } from './Wrapper';
import ChildrenTab from './ChildrenTab';
import { HOUSE, VILLA, APPARTMENT, LAND } from "constants/projectDetail";
const TabPanel = (props) => {
  let appartments = props.projectUnits.filter(item => item.type === APPARTMENT);
  let houses = props.projectUnits.filter(item => item.type === HOUSE);
  let lands = props.projectUnits.filter(item => item.type === LAND);
  return (
    <Wrapper>
      <Tabs>
        <TitleTab label="Căn hộ">
          <ChildrenTab projectUnits={appartments}></ChildrenTab>

        </TitleTab>

        <TitleTab label="Nhà phố">
          <ChildrenTab projectUnits={houses}></ChildrenTab>
        </TitleTab>

        <TitleTab label="Đất nền">
          <ChildrenTab projectUnits={lands}></ChildrenTab>
        </TitleTab>
      </Tabs>

    </Wrapper>
  );
}

TabPanel.propTypes = {
  title: PropTypes.string,
  projectUnits: PropTypes.object,
};

export default TabPanel;