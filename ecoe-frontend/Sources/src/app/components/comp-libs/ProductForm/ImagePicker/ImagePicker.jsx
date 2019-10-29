import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';

class ImagePicker extends Component {

	static propTypes = {
		children: PropTypes.element,
		onSelected: PropTypes.func
	};

	constructor(props) {
		super(props);
		this.fileId = _.join(['file', _.now()], '-');
	}


	onChange = (e) => {
		let file = _.get(e, 'target.files.0');

		_.isFunction(this.props.onSelected) && this.props.onSelected({
			file,
			url: window.URL.createObjectURL(file)
		});

		e.target.value = ''; // Clear input field
	};

	render() {

		let {children} = this.props;

		return (
			<Fragment>
				<label htmlFor={this.fileId}>
					<input type="file" id={this.fileId} onChange={this.onChange} style={{display: 'none'}}/>
					{children}
				</label>

			</Fragment>
		)
	}
}

export default ImagePicker;