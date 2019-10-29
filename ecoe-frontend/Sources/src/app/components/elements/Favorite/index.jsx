import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Svg } from './Wrapper';

const Favorite = (props) => {
    let Type = props.type < 3 ? props.type : 2;
    let Fill = props.fill ? props.fill : "rgba(0, 0, 0, .4)";
    let Stroke = props.stroke ? props.stroke : "#fff";
    let ViewBox = props.viewBox ? props.viewBox : "0 0 64 40.372";

    return (
        <Fragment>
            <Svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox={ViewBox} type={Type} onClick={props.onClick}>
                <g id="favorite_heart_border" data-name="favorite-heart-border" transform="translate(-430.565 -6347)">
                    <path id="favorite_heart" data-name="favorite-heart" 
                        d="M499.772,183.27a6.728,6.728,0,0,0-6.481-5.15,6.47,6.47,0,0,0-4.127,11.475l10.662,10.664,11.381-11.431A6.465,6.465,0,0,0,506.3,178.12a6.743,6.743,0,0,0-6.526,5.157Z"
                        transform="translate(-55.229 6169.88)"
                        fill={Fill} stroke={Stroke}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2" />
                </g>
            </Svg>
        </Fragment>
    );
}

Favorite.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    type: PropTypes.number,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    onClick: PropTypes.func
};

export default Favorite;