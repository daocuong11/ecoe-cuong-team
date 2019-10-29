import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';

import SectionNavItem from "./SectionNavItem";
import { NaviSection } from "../../../elements/Typography";

let currIndex = null;
let nextIndex = 0;
const DEFAULT_NAV_WIDTH = 200;

const Ul = styled.div`
    margin: 0;
    padding: 20px 0;
    position: relative;

    list-style: none;
`;

const SectionNav = ({ items, offset, duration, delay, coverWidth, navWidth, linkClass, activeLinkClass }) => {
    navWidth = navWidth ? navWidth : DEFAULT_NAV_WIDTH;
    coverWidth = coverWidth ? coverWidth : items.length * navWidth;

    var navsNode = React.createRef();
    const moveNavs = (newIndex, navWidth) => {
        currIndex = nextIndex;
        nextIndex = newIndex;
        if (navsNode.current) {
            let currLeft = Number.parseInt(navsNode.current.style.left);
            const indexOffset = nextIndex - currIndex;
            navsNode.current.style.left = currLeft - indexOffset * navWidth + "px";
        }
    }
    return (
        <NaviSection>
            <Ul ref={navsNode}>

                {items.map((item, i) => (
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
                        activeLinkClass={activeLinkClass}
                    />
                ))}
            </Ul>
        </NaviSection>

    );
}
SectionNav.propTypes = {
    items: PropTypes.array.isRequired,
    offset: PropTypes.number,
    duration: PropTypes.number,
    delay: PropTypes.number,
    coverWidth: PropTypes.number,
    navWidth: PropTypes.number
}
export default SectionNav;