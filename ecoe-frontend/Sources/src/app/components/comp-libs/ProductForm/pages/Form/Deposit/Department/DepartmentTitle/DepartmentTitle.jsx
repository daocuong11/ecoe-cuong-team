import React, { Component, Fragment } from 'react';
import {Wrapper, Description, Div} from './Wrapper';
import {FormGroup, Label, FormControl, FormInline, Btn} from '../../../../../ui';
import Select from 'UIElement/Select';

class DepartmentTitle extends Component {
    render() {
        return(
            <Wrapper>
				<FormGroup>
					<Label large require>Tiêu đề</Label>
					<Description>
						Câu ngắn gọn để khách hàng có thể biết được tổng quan căn hộ của bạn 'Căn hộ The Tresor 2 phòng ngủ...'
					</Description>
				</FormGroup>
                <FormGroup>
                    <Label require>Căn hộ thuộc dự án</Label>
                    <FormControl width={655} block/>
                </FormGroup>
                <FormInline>
                    <FormGroup>
                        <Label require>Khu vực</Label>
                        <Div>
                            <Select>
                                <option value="Quận 1">Quận 1</option>
                                <option value="Quận 2">Quận 2</option>
                                <option value="Quận 3">Quận 3</option>
                                <option value="Quận 4">Quận 4</option>
                                <option value="Quận 5">Quận 5</option>
                                <option value="Quận 6">Quận 6</option>
                                <option value="Quận 7">Quận 7</option>
                                <option value="Quận 8">Quận 8</option>
                                <option value="Quận 9">Quận 9</option>
                                <option value="Quận 10">Quận 10</option>
                                <option value="Quận 11">Quận 11</option>
                                <option value="Quận 12">Quận 12</option>
                                <option value="Quận Thủ Đức">Quận Thủ Đức</option>
                                <option value="Quận Bình Tân">Quận Bình Tân</option>
                                <option value="Quận Bình Thạnh">Quận Bình Thạnh</option>
                                <option value="Quận Gò Vấp">Quận Gò Vấp</option>
                                <option value="Quận Tân Bình">Quận Tân Bình</option>
                                <option value="Quận Tân Phú">Quận Tân Phú</option>
                                <option value="Quận Phú Nhuận">Quận Phú Nhuận</option>
                                <option value="Huyện Cần Giờ">Huyện Cần Giờ</option>
                                <option value="Huyện Hóc Môn">Huyện Hóc Môn</option>
                                <option value="Huyện Bình Chánh">Huyện Bình Chánh</option>
                                <option value="Huyện Nhà Bè">Huyện Nhà Bè</option>
                                <option value="Huyện Củ Chi">Huyện Củ Chi</option>
                            </Select>
                        </Div>
                    </FormGroup>
                    <FormGroup>
                        <Label require>Số phòng ngủ</Label>
                        <FormControl maxWidth={217} block/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Ưu điểm khác</Label>
                        <FormControl maxWidth={217} block/>
                    </FormGroup>
                </FormInline>
                <Btn primary onClick={this.props.nextStep}><span>Bước 2: Giá & Hoa Hồng</span></Btn>
            </Wrapper>
        )
    }
}

export default DepartmentTitle;