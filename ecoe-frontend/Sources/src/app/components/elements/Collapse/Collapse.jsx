import React, { Component } from 'react';
import {Wrapper, Header, Main, Title, ToolBar, Button, Fill} from './Wrapper';
import PropTypes from 'prop-types';

import chevronUp from 'images/icons/chevron-up.svg';

class Collapse extends Component {
	static propTypes = {
		title: PropTypes.any,
		remove: PropTypes.func,
		defaultActive: PropTypes.bool
	};

	constructor(props, context) {
		super(props, context);
		this.state = this.getDefaultState();
	}


	getDefaultState = () => {
		return {
			active: false
		}
	};

	toggle = () => {
		this.setState(({active}) => {
			return {
				active: !active
			}
		})
	};

	componentDidMount() {
		this.setState(({active}, {defaultActive}) => {
			return {
				active: defaultActive
			}
		});
	}

	render() {
		let {title, children, remove} = this.props;
		let {active} = this.state;
		return (
			<Wrapper>
				<Header>
					<Title>
						{title}
					</Title>
					<Fill />
					<ToolBar>
						{/* <Button onClick={this.toggle} flip={!active}>
							<img src={chevronUp} />
						</Button> */}
						{
							remove && (
								<Button onClick={remove}>
									<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 20.782 20.781">
										<g transform="translate(2.121 2.121)">
											<line x1="16.539" y2="16.539" fill="none" stroke="#183253" strokeLinecap="round" strokeWidth="5"/>
											<line x2="16.539" y2="16.539" fill="none" stroke="#183253" strokeLinecap="round" strokeWidth="5"/>
										</g>
									</svg>
								</Button>
							)
						}
					</ToolBar>
				</Header>
				<Main active={active}>{children}</Main>

			</Wrapper>
		)
	}
}

export default Collapse;