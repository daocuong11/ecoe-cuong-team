import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Close from 'images/icons/search-component/close.svg';

class OpenChildModal extends React.Component {
    render() {
        let title = this.props.title ? this.props.title : "Title";
        return (
            <Wrapper icon={Close} onClick={this.props.onClick}>
                {title}
            </Wrapper>
        )
    }
}

OpenChildModal.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
};

export default OpenChildModal;