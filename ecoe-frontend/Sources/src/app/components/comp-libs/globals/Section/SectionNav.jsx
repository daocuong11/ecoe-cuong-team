import PropTypes from "prop-types";
import React from "react";

import SectionNavItem from "./SectionNavItem";
import { NaviSection } from "../../../elements/Typography";

let currIndex = null;
let nextIndex = 0;
const DEFAULT_NAV_WIDTH = 200;

const SectionNav =({items, offset, duration, delay,coverWidth, navWidth, linkClass,activeLinkClass })=>{
    navWidth = navWidth? navWidth: DEFAULT_NAV_WIDTH;
    coverWidth = coverWidth?coverWidth: items.length* navWidth;
    const coverStyle={
        // display: "flex",
        // maxWidth: "1366px",
        background: "#f4fbfc",
        // margin: "0 auto",
        height: '100%',
        display: 'inline-flex',
    }
    const navStyle={
        margin: 0,
        paddingLeft: 0,
        position: "relative",
        height: "100%",
        display:"flex",
        listStyle:"none"
    }
    var navsNode = React.createRef();
    const moveNavs = (newIndex,navWidth)=>{
        currIndex = nextIndex;
        nextIndex = newIndex;
        if(navsNode.current){
            let currLeft = Number.parseInt(navsNode.current.style.left);
            const indexOffset = nextIndex - currIndex;
            navsNode.current.style.left = currLeft - indexOffset* navWidth + "px";
        }
    }

    return(
        <div style={coverStyle}>
            <NaviSection>
            <ul style={navStyle} ref={navsNode}>
                
                {items.map((item,i)=>(
                    <SectionNavItem 
                        key={i}
                        index={i}
                        item={item}
                        offset={offset}
                        duration={duration} 
                        delay={delay}
                        moveNavs={moveNavs}
                        width={navWidth}
                        linkClass={linkClass} 
                        activeLinkClass={activeLinkClass}>

                    </SectionNavItem>
                ))}
            </ul>
            </NaviSection>            
        </div>

    );
}
SectionNav.propTypes = {
    items: PropTypes.array.isRequired,
    offset: PropTypes.number,
    duration: PropTypes.number,
    delay: PropTypes.number,
    coverWidth: PropTypes.number,
    navWidth: PropTypes.number,
    FavoriteButton: PropTypes.bool
}
export default SectionNav;