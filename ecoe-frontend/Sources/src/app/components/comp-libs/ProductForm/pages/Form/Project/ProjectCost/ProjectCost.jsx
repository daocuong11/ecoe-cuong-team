import React, { Component, createRef } from 'react';
import { FormGroup, Label, FormControl, Btn, Text, FormInline, FlexWrap } from '../../../../ui';
import { Wrapper, Description, FormSection } from './Wrapper';
import _ from 'lodash';
import Model from '../../../../store/Project';

class ProjectCost extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			price: [],
			acreagePrice: [],
			commission: []
		};

		this.$form = createRef();
	}

	componentWillMount() {
		this.setState(Model.get('step2'));
	}

	updateField = (i) => (e) => {
		let {name, value} = e.target;
		this.setState((state) => {
			_.set(state, name, value);
			Model.set(['step2'], state);
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

	render() {

		let { price, acreagePrice, commission } = this.state;

		return (
			<Wrapper>
				<form ref={this.$form}>
					<FormSection>
						<FormGroup>
							<Label large require>Giá </Label>
							<Description>Điền một trong hai loại giá bên dưới.</Description>
						</FormGroup>

						<FormGroup>
							<div><Label require htmlFor="unit">Giá (vnđ) </Label></div>
							<FlexWrap noGutter center>
								<FormControl width={265} id="unit" name="price.0" value={_.get(price, 0, '')} onChange={this.updateField()} number required/>
								<Text small bold>đến</Text>
								<FormControl width={265} name="price.1"  value={_.get(price, 1, '')} onChange={this.updateField()} number required/>
							</FlexWrap>
						</FormGroup>

						<FormGroup>
							<div><Label require htmlFor="area">Giá (triệu/m2) </Label></div>
							<FormControl width={265} id="area" name="acreagePrice.0" value={_.get(acreagePrice, 0, '')} onChange={this.updateField()} number required/>
							<Text small bold>đến</Text>
							<FormControl width={265} name="acreagePrice.1" value={_.get(acreagePrice, 1, '')} onChange={this.updateField()} number required/>
						</FormGroup>
					</FormSection>
					<FormSection>
						<FormGroup>
							<Label large require htmlFor="commission">Hoa hồng (%) </Label>
							<Description>Hoa hồng này do môi giới quyết định chia sẻ với môi giới khác nhận bán, tính trên giá trị của BĐS. Chỉ hiển thị trên kho hàng chung & cửa hàng của tôi.</Description>
							<FormControl width={265} id="commission" name="commission.0" value={_.get(commission, 0, '')} onChange={this.updateField()} number required/>
							<Text small bold>đến</Text>
							<FormControl width={265} name="commission.1" value={_.get(commission, 1, '')} onChange={this.updateField()} number required/>
						</FormGroup>
						<FormGroup>
							<Btn primary onClick={this.props.nextStep} type="button" disabled={!this.isValidForm()}>
								<span>BƯỚC 3: HÌNH ẢNH</span>
							</Btn>
						</FormGroup>
					</FormSection>
				</form>
			</Wrapper>
		)
	}
}

export default ProjectCost;