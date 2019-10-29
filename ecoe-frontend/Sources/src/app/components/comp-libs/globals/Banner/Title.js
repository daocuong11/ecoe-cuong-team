import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MS, SD_BO, SD_FO } from "constants/domainType";

const Text = styled.div`
    display: block;
    font-size: 32px;
    color: #fff;
    
    > p {
        padding-bottom: 30px;
    }
`;

const Title = (props) => {
    return (
        <Fragment>
            {props.domainType === MS ? (
                <Text>
                    <p>Mạng lưới môi giới</p>
                    <p>và bất động sản khổng lồ</p>
                </Text>
            ) : (
                props.domainType === SD_BO ? (
                    <Text>
                        <p>Quản lý cửa hàng của bạn</p>
                        <p>thông minh, nhanh chóng</p>
                    </Text>
            ) : (
                props.domainType === SD_FO && (
                    <Text>
                        <p>Mạng lưới môi giới và</p>
                        <p>bất động sản khổng lồ</p>
                    </Text>
                ) 
            ))}
        </Fragment>
    );
}

Title.propTypes = {
    domainType: PropTypes.string
};

export default Title;