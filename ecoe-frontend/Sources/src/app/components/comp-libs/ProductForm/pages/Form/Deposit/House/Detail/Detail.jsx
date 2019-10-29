import React, { Component } from 'react';
import {
	FormGroup,
	Label,
	FormControl,
	FormInline,
	Text,
	FormSection,
	Layout,
	Left,
	Sticky,
	FlexRow
} from '../../../../../ui';
import { Wrapper, Description } from './Wrapper';
import VerticalNavbar, {VerticalSectionWrapper} from "../../../../../../globals/VerticalSection";
import Radio from 'UIElement/Radio';
import Select from 'UIElement/Select';
import OptionCard from 'UIElement/OptionCard';
import {CustomFields} from "../../../../../CustomFields";
import { Gallery } from '../../../../../ImagePicker';
import {LivingRoom, DiningRoom, BedRoom, BathRoom} from '../../../../../Furniture';
import {Convenience} from '../../../../../Convenience';
import {ProjectInfo} from '../../../../../ProjectInfo';

class Detail extends Component {

	getNavigateList = () => {
		return [
			{
				target: "general",
				label: "TỔNG QUAN"
			},
			{
				target: "advantage",
				label: "ƯU ĐIỂM NỔI BẬT"
			},

			{
				target: "location",
				label: "VỊ TRÍ"
			},
			{
				target: "material",
				label: "CƠ SỞ VẬT CHẤT"
			},
			{
				target: "project-info",
				label: "THÔNG TIN DỰ ÁN"
			}
		]
	};


	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<Wrapper>
				<Layout left>
					<Left>
						<Sticky top="10px">
							<VerticalNavbar items={this.getNavigateList()} offset={-150} duration={500} delay={0}/>
						</Sticky>

					</Left>
					<div>
						<VerticalSectionWrapper items={this.getNavigateList()}>
							<div name="general">
								<FormGroup>
									<Label large require>Tổng quan </Label>
									<Description>
										Phần thông tin để khách hàng xem tổng quan Dự Án của bạn
									</Description>
								</FormGroup>
								<FormGroup>
									<Label require>Trạng thái </Label>
									<div>
										<Radio name="state">Sắp mở bán</Radio>
										<Radio name="state">Đang mở bán</Radio>
										<Radio name="state">Đã bàn giao</Radio>
									</div>
								</FormGroup>
								<FormGroup>
									<Label>Địa chỉ</Label>
								</FormGroup>
								<FormGroup>
									<Label>Số nhà/ Mã căn hộ</Label>
									<Description>Không bắt buộc - Nếu điền thông tin sẽ không hiển thị trên kho hàng chung & giao diện người mua</Description>
									<FormControl maxWidth={600} block={true}/>
								</FormGroup>
								<FormGroup>
									<Label require>Tên đường</Label>
									<FormControl placeholder="Nhập tên đường" maxWidth={600} block={true}/>
								</FormGroup>
								<FormInline>
									<FormGroup>
										<Label require>Tỉnh/Thành phố</Label>
										<div>
											<Select>
												<option value="">Hồ chí minh</option>
											</Select>
										</div>
									</FormGroup>
									<FormGroup>
										<Label require>Quận/Huyện</Label>
										<div>
											<Select>
												<option value="">Hồ chí minh</option>
											</Select>
										</div>
									</FormGroup>
									<FormGroup>
										<Label require>Phường/Xã</Label>
										<div>
											<Select>
												<option value="">Hồ chí minh</option>
											</Select>
										</div>
									</FormGroup>
								</FormInline>
								<FormInline>
									<FormGroup>
										<Label require>Diện tích (m2)</Label>
										<FormControl maxWidth={200} block/>
									</FormGroup>
									<FormGroup>
										<Label require>Chiều dài (m)</Label>
										<FormControl maxWidth={200} block/>
									</FormGroup>
									<FormGroup>
										<Label require>Chiều rộng (m)</Label>
										<FormControl maxWidth={200} block/>
									</FormGroup>
									<FormGroup>
										<Label require>Tầng</Label>
										<FormControl maxWidth={200} block/>
									</FormGroup>
								</FormInline>
								<FormInline>
									<FormGroup>
										<Label require>Số phòng ngủ</Label>
										<FormControl maxWidth={200} block/>
									</FormGroup>
									<FormGroup>
										<Label require>Số phòng tắm</Label>
										<FormControl maxWidth={200} block/>
									</FormGroup>
								</FormInline>
								<FormInline>
									<FormGroup>
										<Label>Độ cao trần nhà (m)</Label>
										<FormControl maxWidth={200} block/>
									</FormGroup>
								</FormInline>
								<FormInline>
									<FormGroup>
										<Label>Tầng lửng</Label>
										<div>
											<Radio name="state">Có</Radio>
											<Radio name="state">Không</Radio>
										</div>
									</FormGroup>
									<FormGroup>
										<Label>Tầng hầm</Label>
										<div>
											<Radio name="state">Có</Radio>
											<Radio name="state">Không</Radio>
										</div>
									</FormGroup>
								</FormInline>
								<FormInline>
									<FormGroup>
										<Label require>Loại chủ quyền sở hữu</Label>
										<Select block>
											<option value="Hợp đồng mua bán">Hợp đồng mua bán</option>
											<option value="Sổ đỏ">Sổ đỏ</option>
											<option value="Sổ hồng">Sổ hồng</option>
											<option value="Khác">Khác</option>
										</Select>
									</FormGroup>
									<FormGroup>
										<Label require>Số năm sở hữu</Label>
										<Select block>
											<option value="50 năm">50 năm</option>
											<option value="Lâu dài">Lâu dài</option>
										</Select>
									</FormGroup>
								</FormInline>
								<FormInline>
									<FormGroup>
										<Label require>Loại </Label>
										<Select block name="kind">
											<option value="1">Mặt tiền</option>
											<option value="2">Hẻm</option>
										</Select>
									</FormGroup>
									<FormGroup>
										<Label>Độ rộng hẻm (m)</Label>
										<FormControl maxWidth={200} block/>
									</FormGroup>
									<FormGroup>
										<Label>Khoảng cách ra đường lớn (m)</Label>
										<FormControl maxWidth={200} block/>
									</FormGroup>
								</FormInline>
							</div>
							<div name="advantage">
								<FormGroup>
									<Label large require>Ưu điểm nổi bật</Label>
									<Description>
										Chọn ưu điểm bạn cho là nổi bật nhất của BĐS
									</Description>
								</FormGroup>
								<FormGroup>
									<Label>Ưu điểm nổi bật gợi ý cho bạn </Label>
									<FormInline>
										<OptionCard title="Sổ hồng" icon="certificate"/>
										<OptionCard title="View sông" icon="riverView" />
										<OptionCard title="Nội thất có sẵn" icon="furnished" />
										<OptionCard title="Gần trường học" icon="school"/>
										<OptionCard title="Gần bệnh viện" icon="hospital"/>
										<OptionCard title="Gần siêu thị" icon="market"/>
										<OptionCard title="Dân cư đông đúc" icon="populated" />
										<OptionCard title="Thiết kế xanh" icon="greenDesign"/>
										<OptionCard title="Smart home" icon="smartHome"/>
										<OptionCard title="Căn góc" icon="cornered"/>
										<OptionCard title="Trung tâm thành phố" icon="centered"/>
										<OptionCard title="View thành phố" icon="cityView" />
									</FormInline>
								</FormGroup>
								<FormGroup>
									<CustomFields
										title="Nhập những ưu điểm khác"
										description="Tối đa 03 ưu điểm và 30 ký tự cho mỗi ưu điểm"
										prototype={[{name: "otherHighlight"}]}
										limit={3}
									/>
								</FormGroup>
							</div>
							<div name="location">
								<FormSection>
									<FormGroup>
										<Label large>Vị trí</Label>
										<Description>Check in địa điểm dự án để xác định tiện ích xung quanh</Description>
										<FormControl maxWidth={600}/>
									</FormGroup>
									<FormGroup>
										<Label>Hình ảnh tiện ích xung quanh</Label>
										<Gallery limit={6} />
									</FormGroup>
									<FormGroup>
										<CustomFields
											title="Bệnh viện"
											description="Tối đa 5 tiện ích. Tối đa 20 ký tự"
											prototype={[{name: "hospital", title: "Tên bệnh viện"}, {name: "distance", title: "Khoảng cách"}]}
											limit={5}
										/>
									</FormGroup>
									<FormGroup>
										<CustomFields
											title="Trường học"
											description="Tối đa 5 tiện ích. Tối đa 20 ký tự"
											prototype={[{name: "school", title: "Tên trường học"}, {name: "distance", title: "Khoảng cách"}]}
											limit={5}
										/>
									</FormGroup>
									<FormGroup>
										<CustomFields
											title="Siêu thị/ chợ/ trung tâm thương mại"
											description="Tối đa 5 tiện ích. Tối đa 20 ký tự"
											prototype={[{name: "market", title: "Tên"}, {name: "distance", title: "Khoảng cách"}]}
											limit={5}
										/>
									</FormGroup>
									<FormGroup>
										<CustomFields
											title="Khác"
											description="Tối đa 5 tiện ích. Tối đa 20 ký tự"
											prototype={[{name: "others", title: "Tên tiện ích"}, {name: "distance", title: "Khoảng cách"}]}
											limit={5}
										/>
									</FormGroup>
								</FormSection>
							</div>
							<div name="material">
								<FormGroup>
									<Label large>Cơ sở vật chất</Label>
								</FormGroup>
								<FormGroup>
									<Label>Nội thất</Label>
									<FlexRow full>
										<LivingRoom />
										<DiningRoom />
										<BedRoom />
										<BathRoom />
									</FlexRow>
								</FormGroup>
								<FormGroup>
									<Convenience />
								</FormGroup>
								<FormGroup>
									<CustomFields
										title="Tiện nghi khác"
										description="Tối đa 5 tiện ích"
										prototype={[{name: "", title: ""}]}
										limit={5}
									/>
								</FormGroup>
							</div>
							<div name="project-info">
								<FormSection>
									<ProjectInfo />
								</FormSection>
							</div>
						</VerticalSectionWrapper>
					</div>
				</Layout>
			</Wrapper>
		)
	}
}

export default Detail;