import React, { Component, Fragment } from 'react';
import {BtnLink, Btn} from "../ui";

import { Wrapper } from './Wrapper';

class Navigation extends Component {
	render() {

		let { onSubmit, onPreview, onDraft } = this.props;

		return (
			<Wrapper>
				<BtnLink>
					THOÁT
				</BtnLink>
				<div style={{marginLeft: 'auto'}}>
					<Btn outline onClick={onDraft}>LƯU NHÁP</Btn>
					<Btn outline onClick={onPreview}>XEM TRƯỚC</Btn>
					<Btn primary onClick={onSubmit}>ĐĂNG BÀI</Btn>
				</div>
			</Wrapper>
		);
	}
}

export default Navigation;