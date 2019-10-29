import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-scroll';
import styled from 'styled-components';
import icon from "images/icons/product-view/active-section.svg";

const NavItem = styled.div`

    > a.active_verticalLink {
        &:before {
            content: url(${icon});
            position: absolute;
            left: 15px;
            top: -5px;
        }
    }
`;

const SectionNavItem = ({index, item, offset, duration, delay, moveNavs, width, linkClass, activeLinkClass})=>{
    return (
        <NavItem>
            <Link 
                className={linkClass}
                activeClass={activeLinkClass}
                onSetActive={()=>{
                    moveNavs(index,width)
                }}
                to={item.target}
                spy={true}
                smooth = {true}
                offset = {offset}
                duration={duration}
                isDynamic={true}
                delay={delay}
            >{item.label}</Link>
        </NavItem>
    );

}


SectionNavItem.propTypes={
    index: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
    offset: PropTypes.number,
    duration: PropTypes.number,
    delay: PropTypes.number,
    moveNavs: PropTypes.func,
    width: PropTypes.number,
    linkClass: PropTypes.string,
    activeLinkClass: PropTypes.string
}
export default SectionNavItem;