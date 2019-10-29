import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import {Element} from 'react-scroll';


const Wrapper =({children,items,style,className})=>(
    <Fragment>
        {children.map((child,i)=>(
            <Element style={style} className={className} name={items[i].target} key={i} >{child}</Element>
        ))}
    </Fragment>
);

// eslint-disable-next-line react/no-typos
Wrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]).isRequired,
    items: PropTypes.array.isRequired,
    style: PropTypes.object,
    className: PropTypes.string
}
export default Wrapper;