import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Wrapper, { TitleSection, SubTitle } from './Wrapper';
import PopupMapUtilities from '../PopupMapUtilities';
import LeftPanel from "./LeftPanel";
import BottomPanel from './BottomPanel';
import withResolution from '../../../../../graphql/apollo-components/withResolution';
import { SM, MD } from "constants/resolutions";
import ContainerMap from './ContainerMap';

class MapUtilities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidePanel: true
        }
        this.refPopupMapUtilities = React.createRef();
        this.viewAllClick = this.viewAllClick.bind(this);
        this.onTabShowHide = this.onTabShowHide.bind(this);

    }
    componentWillMount(){
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        let currentHideNav = (window.innerWidth <= 1024);
        this.setState({hideNav: currentHideNav});
    }

    viewAllClick() {
        this.refPopupMapUtilities.current.showPopup();
    }
    onTabShowHide(value) {
        this.setState({ isHidePanel: value });
    }

    render() {
        let { resolution } = this.props;
        let isMobile = resolution === SM ;
        return (
            <Fragment>
                {!this.props.isPopup &&
                    <Fragment>
                        <TitleSection>{this.props.title}</TitleSection>
                        <SubTitle>{this.props.subTitle}</SubTitle>
                    </Fragment>
                }
                <Wrapper isPopup={this.props.isPopup} isMobile={isMobile}>
                    <PopupMapUtilities ref={this.refPopupMapUtilities} utilities={this.props.utilities} />
                    {!isMobile && <LeftPanel items={this.props.utilities} onTabShowHide={this.onTabShowHide} isPopup={this.props.isPopup} />}
                    <ContainerMap isMobile={isMobile} image={this.props.image} isHidePanel={this.state.isHidePanel} isPopup={this.props.isPopup} viewAllClick={this.viewAllClick} />
                    {isMobile &&  <BottomPanel items={this.props.utilities} onTabShowHide={this.onTabShowHide} isPopup={this.props.isPopup} />}                       
                </Wrapper>
            </Fragment>
        );
    }
}
MapUtilities.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    utilities: PropTypes.object
};

export default withResolution(MapUtilities);