import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonFilterMobile from './ButtonFilterMobile';
import ButtonMapMobile from './ButtonMapMobile';

const Wrapper = styled.div`
    display: inline-flex;
    align-items: center;
    height: 40px;
    background: #fff;
    border-radius: 40px;
`;

const Button = styled.div`
    display: inline-flex;
    padding: 0 20px;

    &:first-child {
        border-right: 1px solid #ccc;
    }
`;

const MapFilterSelection = (props) => {
    return (
        <Wrapper>
            <Button>
                <ButtonFilterMobile onClick={props.onClick} />
            </Button>
            <Button>
                <ButtonMapMobile onClick={props.onClick} />
            </Button>

        </Wrapper>
    );
}

MapFilterSelection.propTypes = {
    onClick: PropTypes.func,
};

export default MapFilterSelection;