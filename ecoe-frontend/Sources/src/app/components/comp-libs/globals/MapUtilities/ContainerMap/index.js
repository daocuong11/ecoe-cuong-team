import React from 'react';
import PropTypes from 'prop-types';
import Wrapper, {Iframe,  ButtonViewMore, GroupControl, WrapperTitle } from './Wrapper';
import Img from '../../../../elements/Img';
import RButtonCard from 'globalComponents/Buttons/RButtonCard';
import DropdownCustom from 'globalComponents/DropdownCustom';
import { dropdownRadius} from "constants/projectDetail";

const ContainerMap = (props) => {
  return (
    <Wrapper isMobile={props.isMobile} isPopup={props.isPopup}>
      {/* <Img src={imgMap}/> */}
      {
      props.image===undefined ? 
        <Iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31351.909509460074!2d106.7001168321511!3d10.812177108544034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175289f02a8eae9%3A0x34ec9d90e055cde3!2zQsOsbmggVGjhuqFuaCwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1539158511368' width='100%' height='100%' frameborder='0'/> :
        <Img src={props.image}/>
      }
      {
          (props.isPopup !== true &&  props.image ===undefined && !props.isMobile) &&
            <ButtonViewMore isHidePanel ={props.isHidePanel} >
              <RButtonCard type="3" label={'XEM BẢN ĐỒ'} onClick={() => props.viewAllClick(this)}></RButtonCard>
            </ButtonViewMore>
      }
      {
        (props.isPopup === true || props.isMobile) && (
          <GroupControl isHidePanel ={props.isHidePanel} isMobile={props.isMobile}>
            <WrapperTitle>Bán kính</WrapperTitle>
            <DropdownCustom onChange={(value) => { }} items={dropdownRadius} maxWidth='100px'/>
          </GroupControl>
        )
      }
    </Wrapper>
  );
}

ContainerMap.propTypes = {
  image: PropTypes.string
};

export default ContainerMap;