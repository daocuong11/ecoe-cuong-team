import React, { Component, Fragment } from 'react';
import { Wrapper, Header, Main } from './Wrapper';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import CheckBorder from 'UIElement/CheckBox/CheckBorder';
import { AddFields } from '../AddFields';
class Furniture extends Component {

	static propTypes = {
		title: PropTypes.string,
		name: PropTypes.string,
		data: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.any,
			name: PropTypes.string
		}))

	};

	static defaultProps = {
		name: "nameOfInput"
	};
	render() {
		let {title, data, name} = this.props;

		return (
			<Fragment>
				<Wrapper>
					<Header>{title}</Header>
					<Main>
						{
							_.map(data, (item, index) => (
								<CheckBorder name={_.get(item, 'name')} key={index} />

							))
						}
						<AddFields
							prototype={[{name}]}
							limit={5}
						/>
					</Main>
				</Wrapper>
			</Fragment>
		);
	}
}

export default Furniture;