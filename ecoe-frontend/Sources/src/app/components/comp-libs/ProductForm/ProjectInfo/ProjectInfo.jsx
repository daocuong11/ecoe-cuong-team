import React, { Component, Fragment } from 'react';
import {Label} from "../ui/Label";
import {FormGroup, FormControl, FormInline, Text} from "../ui";
import {Description, DotLine} from "./Wrapper";
import {Gallery} from "../ImagePicker";
import Select from 'UIElement/Select';

class ProjectInfo extends Component {
	render() {
		return (
			<Fragment>
				<Label large>Thông tin dự án {!this.props.isDepartment && <span>(nếu có)</span>}</Label>
				<FormGroup>
					<Label>Nhập tên dự án</Label>
					<Description>Thông tin sẽ được điền tự động nếu tên dự án đã có sẵn trong hệ thống ECOE</Description>
					<FormControl placeholder="Tên dự án" width={560}/>
				</FormGroup>
				<FormGroup>
					<Label>Hình ảnh dự án</Label>
					<Description>Loại hình PNG.JPG.PGF, kích thước tối đa 5MB. Tối đa 6 hình</Description>
					<Gallery limit={6} />
				</FormGroup>
				<FormGroup>
					<Label require>Chủ đầu tư</Label>
					<FormControl placeholder="Chủ đầu tư của dự án" width={264} block />
				</FormGroup>
				<DotLine/>
				<FormInline>
					<FormGroup>
						<Label>Mở bán</Label>
						<FormGroup>
							<Select>
								<option value="Tháng 1">Tháng 1</option>
								<option value="Tháng 1">Tháng 2</option>
								<option value="Tháng 1">Tháng 3</option>
								<option value="Tháng 1">Tháng 4</option>
								<option value="Tháng 1">Tháng 5</option>
								<option value="Tháng 1">Tháng 6</option>
								<option value="Tháng 1">Tháng 7</option>
								<option value="Tháng 1">Tháng 8</option>
								<option value="Tháng 1">Tháng 9</option>
								<option value="Tháng 1">Tháng 10</option>
								<option value="Tháng 1">Tháng 11</option>
								<option value="Tháng 1">Tháng 12</option>
							</Select>
							<Text small bold>/</Text>
							<Select>
								<option value="Năm">Năm</option>
							</Select>
						</FormGroup>
					</FormGroup>
					<FormGroup>
						<Label>Bàn giao</Label>
						<FormGroup>
							<Select>
								<option value="Tháng 1">Tháng 1</option>
								<option value="Tháng 1">Tháng 2</option>
								<option value="Tháng 1">Tháng 3</option>
								<option value="Tháng 1">Tháng 4</option>
								<option value="Tháng 1">Tháng 5</option>
								<option value="Tháng 1">Tháng 6</option>
								<option value="Tháng 1">Tháng 7</option>
								<option value="Tháng 1">Tháng 8</option>
								<option value="Tháng 1">Tháng 9</option>
								<option value="Tháng 1">Tháng 10</option>
								<option value="Tháng 1">Tháng 11</option>
								<option value="Tháng 1">Tháng 12</option>
							</Select>
							<Text small bold>/</Text>
							<Select>
								<option value="Năm">Năm</option>
							</Select>
						</FormGroup>
					</FormGroup>
				</FormInline>
				<DotLine/>
				<FormInline>
					<FormGroup>
						<Label>Nhà thầu xây dựng</Label>
						<FormControl width={200} block/>
					</FormGroup>
					<FormGroup>
						<Label>Đơn vị thiết kế</Label>
						<FormControl width={200} block/>
					</FormGroup>
					<FormGroup>
						<Label>Đơn vị quản lý</Label>
						<FormControl width={200} block/>
					</FormGroup>
				</FormInline>
				<DotLine />
				<FormInline>
					<FormGroup>
						<Label>Phí quản lý (VNĐ/m2)</Label>
						<FormControl width={200} block/>
					</FormGroup>
					<FormGroup>
						<Label>Phí gửi xe (VNĐ/tháng)</Label>
						<FormControl width={200} block/>
					</FormGroup>
				</FormInline>
			</Fragment>
		);
	}
}

export default ProjectInfo;