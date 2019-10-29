import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Wrapper = styled.div `
    width: 95%;
    padding-bottom: 20px;
`

export const ShowInline = styled.div `
    display: flex;
`

export const Title = styled.div `
    color: #748CAD;
    font-size: 12px;
    font-family: 'Muli';
`

export const Content = styled.div `
    color: #0A2240;
    font-size: 14px;
    font-family: 'Muli';
    font-weight: bold;
`

export const History = styled.div `
    color: #00837B;
    font-size: 12px;
    font-family: 'Quicksand';
    font-weight: bold;
    text-decoration: underline;
`

export const ContentSection = styled.div.attrs(({ column }) => ({
    w: (100/12)*column || 100,
    }))`
    display: inline-block;
    width: ${props=>props.w && props.w +'%'};
    margin-top: ${props=>props.top && props.top + 'px'};
    margin-right: ${props=>props.right && props.right + 'px'};
    margin-bottom: ${props=>props.bottom && props.bottom + 'px'};
    margin-left: ${props=>props.left && props.left + 'px'};
    z-index: 1;
    @media (max-width: 700px) {
        width: ${props=>!props.hard && "100%"};
    }
`;

export const Margin = styled.div `
    margin-top: ${props=>props.top && props.top + 'px'};
    margin-right: ${props=>props.right && props.right + 'px'};
    margin-bottom: ${props=>props.bottom && props.bottom + 'px'};
    margin-left: ${props=>props.left && props.left + 'px'};
`

ContentSection.propTypes = {
    w: PropTypes.number,
    hard: PropTypes.bool,
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number
};

Margin.propTypes = {
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number
}