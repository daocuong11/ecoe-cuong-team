import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SD_BO } from "constants/domainType";
import { WrapperItem, TitleContent, Content } from './Wrapper';

const ContentItem = (props) => {
    return (
        <WrapperItem>
            <TitleContent>{props.title}</TitleContent>
            <Content> 
                {props.children}             
            </Content>
        </WrapperItem>

    );
}

ContentItem.propTypes = {
    title: PropTypes.string,
};

export default ContentItem;