import React from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs';
import Wrapper, { TabContent } from './Wrapper';
import { IconSchool, IconHospital, IconShopping, IconTraffic, IconFlooding, IconOther } from '../../../../elements/Icon';
import * as _ from "lodash";
import ContainerContent from '../ContainerContent';
import ComingSoon from '../ComingSoon';
import { SHOPPING,SCHOOL,HOSPITAL,OTHER} from "constants/projectDetail";

const BottomPanel = (props) => {

  return (
    <Wrapper>
      {/* showButtonTab={true} */}
        <Tabs showButtonTab={true} viewAllClick={props.viewAllClick} isPopup={props.isPopup} staticMap={props.staticMap} onTabShowHide={props.onTabShowHide} showTab={false}>
            <TabContent label="Trường học" icon={<IconSchool height={30} />}>
                <ContainerContent type={SCHOOL} items={_.filter(props.items,{type: SCHOOL})}/>
            </TabContent>

            <TabContent label="Mua sắm" icon={<IconShopping height={30} />}>
                <ContainerContent type={SHOPPING} items={_.filter(props.items,{type: SHOPPING})}/>
            </TabContent>

            <TabContent label="Y tế" icon={<IconHospital height={30} />}>
                <ContainerContent type={HOSPITAL} items={_.filter(props.items,{type: HOSPITAL})}/>
            </TabContent>

            <TabContent label="Giao thông" icon={<IconTraffic height={30} />} disabled>
               <ComingSoon/>
            </TabContent>

            <TabContent label="Độ ngập" icon={<IconFlooding height={30} />} disabled>
                <ComingSoon/>
            </TabContent>

            <TabContent label="Khác" icon={<IconOther height={30} />}>
                <ContainerContent type={OTHER} items={_.filter(props.items,{type: OTHER})}/>
            </TabContent>
        </Tabs>
    </Wrapper>
  );
}

BottomPanel.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
};

export default BottomPanel;