import React, { Component, createRef } from 'react';
import { FormGroup, Label, FormControl, Btn } from '../../../../ui';
import { Wrapper, Description } from './Wrapper';

import Model from '../../../../store/Project';
import _ from 'lodash';

class ProjectInfo extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			name: "",
			isMounted : false
		};

		this.$form = createRef();
	}

	componentWillMount() {
		this.setState(Model.get('step1'));
	}

	updateField = (i) => (e) => {
		let {name, value} = e.target;
		this.setState((state) => {
			state[name] = value;
			Model.set(['step1'], state);

			return state;
		});
	};

	isValidForm = () => {
		let {current}  = this.$form;
		if(current) {
			return current.checkValidity();
		}

		return false;
	};

	componentDidMount() {
		this.setState({
			isMounted: !!this.$form
		});
	}

	render() {
		let { name } = this.state;

		return (
			<Wrapper>
				<form ref={this.$form}>
					<FormGroup>
						<Label large require>Tên dự án </Label>
						<FormControl name="name" value={name} onChange={this.updateField()} block required/>
					</FormGroup>
					<Description>
						Do dự án đã có sẵn trên hệ thống của ECOE, thông tin sẽ được điền tự động, chọn bước tiếp theo để bổ sung giá & hoa hồng
					</Description>
				</form>
				<Btn primary onClick={this.props.nextStep} disabled={!this.isValidForm()} type="button">
					<span>BƯỚC 2: GIÁ & HOA HỒNG</span>
				</Btn>

			</Wrapper>
		)
	}
}

export default ProjectInfo;