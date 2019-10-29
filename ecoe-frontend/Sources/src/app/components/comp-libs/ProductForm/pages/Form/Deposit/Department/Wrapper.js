import styled, {css} from "styled-components";
import PropTypes from 'prop-types';

export const Container = styled('div')`
    max-width: 1366px;
    margin: auto;
    padding-left: 15px;
    padding-right: 15px;
    background-color: ${props => props.white && '#fff'};
	height:100%;
`;

Container.propTypes = {
	white: PropTypes.bool
};

export const Wrapper = styled('div')`
	position: relative;
`;

export const Header = styled('div')`
	box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
	padding-left: 15px;
    padding-right: 15px;
    background: ${props => props.light ? '#F4F9FA' : '#fff'};
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
`;

Header.propTypes = {
	light: PropTypes.bool
};

export const Main = styled('div')`
	overflow: hidden;
	${props => props.light && css`background: #F4F9FA`}
	${props => props.white && css`background: #fff`}
    margin-top: 86px;
    padding-bottom: 82px;
	/*overflow: auto;
	margin-top: 50px;
	${props => props.light && css`background: #F4F9FA`}
	${props => props.white && css`background: #fff`}*/
`;

Main.propTypes = {
	light: PropTypes.bool,
	white: PropTypes.bool,
};

export const Footer = styled('div')`
	/*border-top: 5px solid #a9a9a98a;
	bottom: 0;
	width: 100%;
	height: 82px;
    background-color: #ffff;
    position: fixed;
    z-index: 1;*/
	position: fixed;
	z-index: 10;
	bottom: 0;
	width: 100%;
	background: #F4F9FA;
`;

export const SectionWrap = styled('div')`
	padding-top: 100px;
	padding-bottom: 100px;
	background-color: ${props => props.white && '#fff'};
`;

SectionWrap.propTypes = {
	white: PropTypes.bool
};

export const Title = styled('div')`
	color: #082241;
	font-size: 24px;
	font-weight: 900;
`;

export const SubTitle = styled('div')`
	font-size: 14px;
	color: #778FAF;
`;

