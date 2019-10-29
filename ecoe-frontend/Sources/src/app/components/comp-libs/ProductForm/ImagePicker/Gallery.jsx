import React, { Component, Fragment } from 'react';
import ImagePicker from './ImagePicker';
import { withGallery } from './withGallery';
import { ImgCard, CloseButton } from '../ui';
import * as _ from 'lodash';
import plusIcon from 'images/icons/plus-sign.18x18.svg';
import PropTypes from 'prop-types';

class Gallery extends Component {

	static propTypes = {
		limit: PropTypes.number,
		defaultValue: PropTypes.array,
		children: PropTypes.func,
		onChange: PropTypes.func,
		onUpdate: PropTypes.func,
		name: PropTypes.string
	};

	ButtonAdd = (props) => {
		return (
			<ImagePicker {...props}>
				<ImgCard border button><img src={plusIcon} alt="icon" width={18} height={18}/></ImgCard>
			</ImagePicker>
		)
	};

	List = () => {
		return withGallery(this.ButtonAdd);
	};

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return !_.isEqual(this.props.defaultValue, nextProps.defaultValue);
	}

	onUpdate = (data, list) => {
		_.isFunction(this.props.onUpdate) && this.props.onUpdate(data, list);
		if(_.isFunction(this.props.onChange)) {
			let e = {
				target: {
					name: this.props.name,
					value: list
				}
			};

			this.props.onChange(e);
		}
	};

	render() {
		const List = this.List();
		let {props} = this;

		return (
			<Fragment>
				<List {...props} onUpdate={this.onUpdate} list={props.defaultValue}>
					{
						({list, remove}) => {

							return (
								_.map(list, (item, index) => (
									<ImgCard key={index} background>
										<CloseButton onClick={() => remove(index)} />
										<img src={_.get(item, 'url')} alt="preview image"/>
									</ImgCard>
								))
							)
						}
					}
				</List>
			</Fragment>
		)
	}
}


export default Gallery;