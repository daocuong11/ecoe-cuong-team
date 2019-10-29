import React from 'react';
import { Text, TagStyle } from './Wrapper';
import PropTypes from 'prop-types';

const Tag = (props) => {
    let label = props.text;
    return (
        <TagStyle tagStyle={props.tagStyle} >
            <Text>
                {
                    label === "PRJ_OPENING_SOON" ? "SẮP MỞ BÁN" :
                    label === "PRJ_OPENING" ? "ĐANG MỞ BÁN" :
                    label === "PRJ_SOLD" ? "ĐÃ BÀN GIAO" :
                    label === "HM_OPENING" ? "ĐANG BÁN" :
                    label === "HM_SOLD" ? "ĐÃ BÁN" : label
                }
            </Text>
        </TagStyle>
    );
}

Tag.propTypes = {
    tagStyle: PropTypes.number,
    text: PropTypes.string,
};

export default Tag;