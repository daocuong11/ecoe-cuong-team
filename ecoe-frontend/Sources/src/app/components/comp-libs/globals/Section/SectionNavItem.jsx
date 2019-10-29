import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-scroll';

const SectionNavItem = ({index, item, offset, duration, delay, moveNavs, width, linkClass, activeLinkClass})=>{
    const liStyle={
        // width : width,
        marginRight: '50px',
        height: '100%'
    }
    return (
        <li style={liStyle}>
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
        </li>
    );

}

// eslint-disable-next-line react/no-typos
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