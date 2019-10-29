import React, { Component, Fragment } from 'react';
import {Wrapper, Description, Div} from './Wrapper';
import {FormGroup, Label, FormControl, FormSection, Btn} from '../../../../../ui';

class DepartmentPrice extends Component {
    render() {
        return(
            <Wrapper>
				<FormGroup>
					<Label large require>Giá</Label>
				</FormGroup>
                <FormGroup>
                    <Label>Giá (vnđ)</Label>
                    <FormControl width={264} block/>
                </FormGroup>
                <FormGroup>
                    <Label>Giá (triệu/m2)</Label>
                    <FormControl width={264} block></FormControl>
                </FormGroup>
                <FormSection>
                    <FormGroup>
                        <Label large require>Hoa hồng (%)</Label>
                        <Description>Hoa hồng này do môi giới quyết định chia sẻ với môi giới khác nhận bán, tính trên giá trị của BĐS.</Description>
                    </FormGroup>
                    <FormGroup>
                        <Description>Chỉ hiển thị trên kho hàng chung & cửa hàng của tôi</Description>
                        <FormControl width={170} block></FormControl>
                    </FormGroup>
                </FormSection>
                <Btn primary onClick={this.props.nextStep}><span>Bước 3: Hình ảnh</span></Btn>
            </Wrapper>
        )
    }
}

export default DepartmentPrice;