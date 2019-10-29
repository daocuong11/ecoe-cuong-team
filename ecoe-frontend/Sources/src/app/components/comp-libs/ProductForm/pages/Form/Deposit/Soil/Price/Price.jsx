import React, { Component } from 'react';
import { Wrapper, Description } from './Wrapper';
import { FormGroup, Label, FormControl as Control, Btn, Text, FormSection } from '../../../../../ui';
import { FormData, FormComponent } from '../../../../../store';


const FormControl = (props) => (
	<FormComponent>
		<Control {...props}/>
	</FormComponent>
);

class Price extends Component {
	render() {
		return (
			<FormData name="price_commission" root>
				<Wrapper>
					<FormSection>
						<FormGroup>
							<Label large require>Giá </Label>
							<Description>Điền một trong hai loại giá bên dưới.</Description>
						</FormGroup>

						<FormGroup>
							<div><Label require htmlFor="unit">Giá (vnđ) </Label></div>
							<FormControl width={265} id="unit" name="unitFrom"/>
						</FormGroup>

						<FormGroup>
							<div><Label require htmlFor="area">Giá (triệu/m2) </Label></div>
							<FormControl width={265} id="area" name="unitPerArea" />
						</FormGroup>
					</FormSection>
					<FormSection>
						<FormGroup>
							<Label large require>Hoa hồng (%) </Label>
							<Description>Hoa hồng này do môi giới quyết định chia sẻ với môi giới khác nhận bán, tính trên giá trị của BĐS. Chỉ hiển thị trên kho hàng chung & cửa hàng của tôi.</Description>
							<FormControl width={265} id="area"/>
						</FormGroup>
						<FormGroup>
							<Btn primary onClick={this.props.nextStep}><span>Bước 3: Hình Ảnh</span></Btn>
						</FormGroup>
					</FormSection>
				</Wrapper>
			</FormData>
		)
	}
}

export default Price;