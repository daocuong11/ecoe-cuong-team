import React, {Component, Fragment} from 'react';
import {FormGroup, Label, FormControl, Btn, FormInline, Text, FormSection, ImgCard, CloseButton} from '../../../../ui';
import { Wrapper, Description, CheckBox, CheckBoxWrap } from './Wrapper';

import Radio from 'UIElement/Radio';
import Select from 'UIElement/Select';
import OptionCard from 'UIElement/OptionCard';

import { CustomFields } from '../../../../CustomFields';
import {Gallery} from "../../../../ImagePicker";
import * as _ from "lodash";

import { Documents } from '../../../../Documents';

import ProjectKind from '../ProjectKind';
import {FlexColumn, FlexRow, Layout, Left, Sticky} from "../../../../ui";
import VerticalNavbar, { VerticalSectionWrapper } from "globalComponents/VerticalSection";
import {Convenience} from '../../../../Convenience';
import Model from '../../../../store/Project';

import { City } from '../../../../City';
import { District } from '../../../../District';
import { Ward } from '../../../../Ward';
import { Datepicker } from '../../../../Datepicker';

const PRJ_OPENING_SOON = 'PRJ_OPENING_SOON';
const PRJ_OPENING = 'PRJ_OPENING';
const PRJ_SOLD = 'PRJ_SOLD';

class ProjectDetail extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = this.getDefaultState();
	}

	getDefaultState = () => {
		return {
			general: {},
			investor: {}

		};
	};


	getNavigateList = () => {
		return [
			{
				target: "general",
				label: "TỔNG QUAN"
			},
			{
				target: "project-kind",
				label: "LOẠI HÌNH DỰ ÁN"
			},

			{
				target: "location",
				label: "VỊ TRÍ"
			},
			{
				target: "advantage",
				label: "TIỆN ÍCH NỘI KHU"
			},
			{
				target: "investor",
				label: "CHỦ ĐẦU TƯ"
			},
			{
				target: "partnership",
				label: "ĐƠN VỊ HỢP TÁC"
			}
		]
	};


	componentDidMount() {
		window.scrollTo(0, 0);
	}

	componentWillMount() {
		this.setState(Model.get('step4'));
	}

	updateField = (i) => (e) => {
		let {name, value} = e.target;
		this.setState((state) => {
			_.set(state, name, value);
			Model.set(['step4'], state);
			return state;
		});
	};

	updateCheckbox = (name) => (e) => {
		let list = _.get(this.state, name);
		let {value, checked} = e.target;

		if(checked)
		{
			list.push(value);
		}
		else
		{
			_.remove(list, item => item === value);
		}

		_.set(this.state, name, list);

		this.setState(this.state);
		Model.set(['step4'], this.state);
	};

	updateLocationNear = (type) => (e) => {
		let {name, value} = e.target;
		let { location } = this.state;
		let { near } = location;
		let index = _.findIndex(near, {type});
		if(index > -1) {
			_.set(near, [index, 'data'], value);

			_.set(location, 'near', near);

			this.setState({
				location
			});

			Model.set(['step4'], this.state);
		}
	};

	updatePartnership = (companyId) => (e) => {
		let { partnership } = this.state;
		let { value } = e.target;
		let index = _.findIndex(partnership, {companyId});

		_.set(partnership, [index, 'name'], value);

		this.setState({
			partnership
		});

		Model.set(['step4'], this.state);
	};

	updateFundingBank = () => (e) => {
		let { partnership } = this.state;
		let { name, value } = e.target;

		_.remove(partnership, (item) => item.roleId === 'fundingBank');

		let newList = _.map(value, (item) => ({
			...item,
			roleId: 'fundingBank'
		}));

		partnership = partnership.concat(newList);

		this.setState({
			partnership
		});

		Model.set(['step4'], this.state);

	};

	render() {

		let {general, investor, kind, location, convenience, otherConvenience, partnership} = this.state;

		let otherUtilities = _.map(_.get(general, 'otherUtilities'), item => {
			return {
				otherUtilities: item
			};
		});

		let hospitals = _.find(_.get(location, 'near'), {type: 'hospitals'});
		let schools = _.find(_.get(location, 'near'), {type: 'schools'});
		let markets = _.find(_.get(location, 'near'), {type: 'markets'});
		let others = _.find(_.get(location, 'near'), {type: 'others'});

		let architect =  _.find(partnership, {roleId: 'architect'});
		let constructor =  _.find(partnership, {roleId: 'constructor'});
		let investorPartner =  _.find(partnership, {roleId: 'investor'});
		let operator =  _.find(partnership, {roleId: 'operator'});
		let supervisor =  _.find(partnership, {roleId: 'supervisor'});
		let guaranteeing =  _.find(partnership, {roleId: 'guaranteeing'});
		let fundingBank =  _.filter(partnership, {roleId: 'fundingBank'});

		return (
			<Wrapper>
				<Layout left>
					<Left>
						<Sticky top="10px">
							<VerticalNavbar items={this.getNavigateList()} offset={-150} duration={500} delay={0}/>
						</Sticky>

					</Left>
					<div id="project">
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
										<Radio name="general.status" value={PRJ_OPENING_SOON} onChange={this.updateField()} checked={_.get(general, 'status') === PRJ_OPENING_SOON}>Sắp mở bán</Radio>
										<Radio name="general.status" value={PRJ_OPENING} onChange={this.updateField()} checked={_.get(general, 'status') === PRJ_OPENING}>Đang mở bán</Radio>
										<Radio name="general.status" value={PRJ_SOLD} onChange={this.updateField()} checked={_.get(general, 'status') === PRJ_SOLD}>Đã bàn giao</Radio>
									</div>
								</FormGroup>
								<FormGroup>
									<Label>Địa chỉ</Label>
								</FormGroup>
								<FormGroup>
									<Label require>Tên đường</Label>
									<FormControl placeholder="Nhập tên đường" maxWidth={600} block={true} name="general.address.street" value={_.get(general, ['address', 'street'], '')} onChange={this.updateField()}/>
								</FormGroup>

								<FormInline>
									<FormGroup>
										<Label require>Tỉnh/thành phố </Label>
										<div>
											<City selected={_.get(general, ['address', 'city'], '')} name="general.address.city" onChange={this.updateField()}/>
										</div>
									</FormGroup>
									<FormGroup>
										<Label require>Quận/Huyện </Label>
										<div>
											<District selected={_.get(general, ['address', 'district'], '')} name="general.address.district" onChange={this.updateField()}/>
										</div>
									</FormGroup>
									<FormGroup>
										<Label require>Phường/xã </Label>
										<div>
											<Ward selected={_.get(general, ['address', 'ward'], '')} name="general.address.ward" onChange={this.updateField()}/>
										</div>
									</FormGroup>
								</FormInline>

								<FormGroup>
									<Label require>Tên chủ đầu tư </Label>
									<FormControl maxWidth={600} block={true} name="investor.name" value={_.get(investor, ['name'], '')} onChange={this.updateField()}/>
								</FormGroup>

								<FormInline>
									<FormGroup>
										<Label require>Tổng số vốn đầu tư (tỷ) </Label>
										<FormControl maxWidth={170} name="general.totalInvestment" value={_.get(general, 'totalInvestment', '')} onChange={this.updateField()} block/>
									</FormGroup>
									<FormGroup>
										<Label require>Diện tích toàn dự án (m2) </Label>
										<FormControl maxWidth={170} name="general.totalArea" value={_.get(general, 'totalArea', '')} onChange={this.updateField()} block/>
									</FormGroup>
									<FormGroup>
										<Label require>Mật độ xây dựng (%) </Label>
										<FormControl maxWidth={170} name="general.buildingDensity" value={_.get(general, 'buildingDensity', '')} onChange={this.updateField()} block/>
									</FormGroup>
									<FormGroup>
										<Label require>Mật độ cây xanh (%) </Label>
										<FormControl maxWidth={170} name="general.greenDensity" value={_.get(general, 'greenDensity', '')} onChange={this.updateField()} block/>
									</FormGroup>
								</FormInline>

								<FormInline>
									<FormGroup>
										<Label require>Khởi công </Label>
										<div>
											<Datepicker name="general.initiationDate" value={_.get(general, 'initiationDate', '')} onChange={this.updateField()}  maxWidth={170} />
										</div>
									</FormGroup>
									<FormGroup>
										<Label require>Bàn giao </Label>
										<div>
											<Datepicker name="general.handoverDate" value={_.get(general, 'handoverDate', '')} onChange={this.updateField()}  maxWidth={170} />
										</div>
									</FormGroup>
								</FormInline>
								<FormInline>
									<FormGroup>
										<Label>Số căn hộ </Label>
										<FormControl maxWidth={170} name="general.department" value={_.get(general, 'department', '')} onChange={this.updateField()} block/>
									</FormGroup>
									<FormGroup>
										<Label>Số Officetel </Label>
										<FormControl maxWidth={170} name="general.officetel" value={_.get(general, 'officetel', '')} onChange={this.updateField()} block/>
									</FormGroup>
									<FormGroup>
										<Label>Số Shophouse </Label>
										<FormControl maxWidth={170} name="general.shophouse" value={_.get(general, 'shophouse', '')} onChange={this.updateField()} block/>
									</FormGroup>
								</FormInline>
								<FormInline>
									<FormGroup>
										<Label>Số biệt thự </Label>
										<FormControl maxWidth={170} name="general.villa" value={_.get(general, 'villa', '')} onChange={this.updateField()} block/>
									</FormGroup>
									<FormGroup>
										<Label>Số nhà phố </Label>
										<FormControl maxWidth={170} name="general.house" value={_.get(general, 'house', '')} onChange={this.updateField()} block/>
									</FormGroup>
									<FormGroup>
										<Label>Số đất nền </Label>
										<FormControl maxWidth={170} name="general.soil" value={_.get(general, 'soil', '')} onChange={this.updateField()} block/>
									</FormGroup>
								</FormInline>
								<FormInline>
									<FormGroup>
										<Label require>Loại chủ quyền sở hữu </Label>
										<div>
											<Radio name="general.juridical" value={1} checked={_.get(general, 'juridical', 1) == 1} onChange={this.updateField()}>Sổ hồng/ sổ đỏ</Radio>
											<Radio name="general.juridical" value={2} checked={_.get(general, 'juridical', '') == 2} onChange={this.updateField()}>Hợp đồng mua bán</Radio>
											<Radio name="general.juridical" value={3} checked={_.get(general, 'juridical', '') == 3} onChange={this.updateField()}>Khác</Radio>
										</div>
									</FormGroup>
									<FormGroup>
										<Label require>Số năm sở hữu </Label>
										<div>
											<Radio name="general.durableYears" value={1} checked={_.get(general, 'durableYears', 1) == 1} onChange={this.updateField()}>50 năm</Radio>
											<Radio name="general.durableYears" value={2} checked={_.get(general, 'durableYears', '') == 2} onChange={this.updateField()}>Lâu dài</Radio>
										</div>
									</FormGroup>
								</FormInline>
								<FormInline>
									<FormGroup>
										<Label require>Tình trạng bàn giao </Label>
										<div>
											<Select name="general.handoverCondition" value={_.get(general, 'handoverCondition')} onChange={this.updateField()}>
												<option value="RAW">Thô</option>
												<option value="SURFACE-FINISH">Hoàn thiện cơ bản</option>
												<option value="FURNITURE-FINISH">Hoàn thiện nội thất</option>
											</Select>
										</div>
									</FormGroup>
									<FormGroup>
										<Label require>Thời gian bảo hành</Label>
										<div>
											<FormControl name="general.warranty" value={_.get(general, 'warranty', '') } onChange={this.updateField()}/>
										</div>
									</FormGroup>
								</FormInline>
								<FormInline>
									<FormGroup>
										<Label>Phí quản lý (đ/m2) </Label>
										<FormControl name="general.fee.management" value={_.get(general, 'fee.management', '')} onChange={this.updateField()} block/>
									</FormGroup>
									<FormGroup>
										<Label>Phí gửi xe máy (đ/xe/tháng) </Label>
										<FormControl name="general.fee.bikeParking" value={_.get(general, 'fee.bikeParking', '')} onChange={this.updateField()} block/>
									</FormGroup>
									<FormGroup>
										<Label>Phí gửi ôtô (đ/xe/tháng) </Label>
										<FormControl name="general.fee.otoParking" value={_.get(general, 'fee.otoParking', '')} onChange={this.updateField()} block/>
									</FormGroup>
								</FormInline>

								<FormGroup>
									<Label>Ưu điểm nổi bật gợi ý cho bạn </Label>
									<FormInline>
										<OptionCard title="Sổ hồng" icon="certificate" value="HOUSE-CERTIFICATE" checked={_.includes(_.get(general, 'utilities'), 'HOUSE-CERTIFICATE')} onChange={this.updateCheckbox('general.utilities')}/>
										<OptionCard title="View sông" icon="riverView" value="RIVER-VIEW" checked={_.includes(_.get(general, 'utilities'), 'RIVER-VIEW')} onChange={this.updateCheckbox('general.utilities')}/>
										<OptionCard title="Nội thất có sẵn" icon="furnished" value="FURNISHED" checked={_.includes(_.get(general, 'utilities'), 'FURNISHED')} onChange={this.updateCheckbox('general.utilities')} />
										<OptionCard title="Gần trường học" icon="school" value="NEAR-SCHOOL" checked={_.includes(_.get(general, 'utilities'), 'NEAR-SCHOOL')} onChange={this.updateCheckbox('general.utilities')}/>
										<OptionCard title="Gần bệnh viện" icon="hospital" value="NEAR-HOSPITAL" checked={_.includes(_.get(general, 'utilities'), 'NEAR-HOSPITAL')} onChange={this.updateCheckbox('general.utilities')}/>
										<OptionCard title="Gần siêu thị" icon="market" value="NEAR-MARKET" checked={_.includes(_.get(general, 'utilities'), 'NEAR-MARKET')} onChange={this.updateCheckbox('general.utilities')}/>
										<OptionCard title="Dân cư đông đúc" icon="populated" value="POPULATED" checked={_.includes(_.get(general, 'utilities'), 'POPULATED')} onChange={this.updateCheckbox('general.utilities')}/>
										<OptionCard title="Thiết kế xanh" icon="greenDesign" value="GREEN-DESIGN" checked={_.includes(_.get(general, 'utilities'), 'GREEN-DESIGN')} onChange={this.updateCheckbox('general.utilities')}/>
										<OptionCard title="Smart home" icon="smartHome" value="SMART-HOME" checked={_.includes(_.get(general, 'utilities'), 'SMART-HOME')} onChange={this.updateCheckbox('general.utilities')}/>
										<OptionCard title="Căn góc" icon="cornered" value="CORNERED" checked={_.includes(_.get(general, 'utilities'), 'CORNERED')} onChange={this.updateCheckbox('general.utilities')}/>
										<OptionCard title="Trung tâm thành phố" icon="centered" value="CENTERED" checked={_.includes(_.get(general, 'utilities'), 'CENTERED')} onChange={this.updateCheckbox('general.utilities')}/>
										<OptionCard title="View thành phố" icon="cityView" value="CITY-VIEW" checked={_.includes(_.get(general, 'utilities'), 'CITY-VIEW')} onChange={this.updateCheckbox('general.utilities')}/>
									</FormInline>
								</FormGroup>
								<FormGroup>
									<CustomFields data={otherUtilities} name="general.otherUtilities" onChange={this.updateField()}
										title="Nhập những ưu điểm khác"
										description="Tối đa 03 ưu điểm và 30 ký tự cho mỗi ưu điểm"
										prototype={[{name: "otherUtilities"}]}
										limit={3}
									/>
								</FormGroup>
							</div>
							<div name="project-kind">
								<FormSection>
									<Label large require>Loại hình dự án</Label>
									<ProjectKind data={kind} onChange={this.updateField()}/>
								</FormSection>
							</div>
							<div name="location">
								<FormSection>
									<FormGroup>
										<Label large>Vị trí</Label>
										<Description>Check in địa điểm dự án để xác định tiện ích xung quanh</Description>
										<FormInline>
											<FormControl maxWidth={200} name="location.coordinates.lng" value={_.get(location, 'coordinates.lng')} onChange={this.updateField()} placeholder="Longitude"/>
											<FormControl maxWidth={200} name="location.coordinates.lat" value={_.get(location, 'coordinates.lat')} onChange={this.updateField()} placeholder="Latitude"/>
										</FormInline>
									</FormGroup>
									<FormGroup>
										<Label>Hình ảnh tiện ích xung quanh</Label>
										<Gallery limit={6} defaultValue={_.get(location, 'images', [])}/>
									</FormGroup>
									<FormGroup>
										<CustomFields
											title="Bệnh viện"
											description="Tối đa 5 tiện ích. Tối đa 20 ký tự"
											prototype={[{name: "name", title: "Tên bệnh viện"}, {name: "distance", title: "Khoảng cách"}]}
											data={_.get(hospitals, 'data')}
											name="hospitals" onChange={this.updateLocationNear('hospitals')}
											limit={5}
										/>
									</FormGroup>
									<FormGroup>
										<CustomFields
											title="Trường học"
											description="Tối đa 5 tiện ích. Tối đa 20 ký tự"
											prototype={[{name: "name", title: "Tên trường học"}, {name: "distance", title: "Khoảng cách"}]}
											data={_.get(schools, 'data')}
											name="schools" onChange={this.updateLocationNear('schools')}
											limit={5}
										/>
									</FormGroup>
									<FormGroup>
										<CustomFields
											title="Siêu thị/ chợ/ trung tâm thương mại"
											description="Tối đa 5 tiện ích. Tối đa 20 ký tự"
											prototype={[{name: "name", title: "Tên"}, {name: "distance", title: "Khoảng cách"}]}
											data={_.get(markets, 'data')}
											name="markets" onChange={this.updateLocationNear('markets')}
											limit={5}
										/>
									</FormGroup>
									<FormGroup>
										<CustomFields
											title="Khác"
											description="Tối đa 5 tiện ích. Tối đa 20 ký tự"
											prototype={[{name: "name", title: "Tên tiện ích"}, {name: "distance", title: "Khoảng cách"}]}
											data={_.get(others, 'data')}
											name="others" onChange={this.updateLocationNear('others')}
											limit={5}
										/>
									</FormGroup>
								</FormSection>
							</div>
							<div name="advantage">
								<FormSection>
									<Label large>Tiện ích nội khu</Label>
									<FormGroup>
										<Convenience data={convenience} name="convenience" onChange={this.updateField()} />
									</FormGroup>

									<FormGroup>
										<CustomFields
											title="Tiện ích nội khu khác"
											description="Tối đa 5 tiện ích. Tối đa 20 ký tự"
											prototype={[{name: "otherConvenience"}]}
											data={_.map(otherConvenience, item => ({ otherConvenience: item }))}
											name="otherConvenience" onChange={this.updateField()}
											limit={5}
										/>
									</FormGroup>
								</FormSection>
							</div>
							<div name="investor">
								<FormSection>
									<Label large>Chủ đầu tư</Label>
									<FormGroup>
										<Label require>Tên tập đoàn</Label>
										<FormControl maxWidth={600} name="investor.name" value={_.get(investor, ['name'], '')} onChange={this.updateField()} block/>
									</FormGroup>
									<FormGroup>
										<Label>Hình ảnh</Label>
										<div><Description>Loại hình PNG.JPG.PGF, kích thước tối đa 5MB. </Description></div>
										<Gallery limit={1} name="investor.images" defaultValue={_.get(investor, 'images', [])} onChange={this.updateField()}/>
									</FormGroup>
									<FormGroup>
										<Label>Link website chủ đầu tư</Label>
										<FormControl maxWidth={600} name="investor.website" value={_.get(investor, 'website')} onChange={this.updateField()} block/>
									</FormGroup>
									<FormGroup>
										<Label>Hoạt động</Label>
										<div>
											<Radio name="investor.boundary"
											       onChange={this.updateField()}
											       value="DOMESTIC"
											       checked={_.isEqual(_.get(investor, 'boundary'), 'DOMESTIC')}
											>
												Trong nước
											</Radio>
											<Radio name="investor.boundary"
											       onChange={this.updateField()}
											       value="FOREIGN"
											       checked={_.isEqual(_.get(investor, 'boundary'), 'FOREIGN')}
											>
												Ngoài nước
											</Radio>
										</div>
									</FormGroup>
									<FormGroup>
										<Label>Dự án đã thực hiện</Label>
										<FormControl  name="investor.project" value={_.get(investor, 'project')} onChange={this.updateField()} maxWidth={600} block/>
									</FormGroup>

									<FormGroup>
										<Documents
											title="Tài liệu từ chủ đầu tư"
											data={_.get(investor, 'documents', [])}
											name="investor.documents" onChange={this.updateField()}
										/>
									</FormGroup>
								</FormSection>
							</div>
							<div name="partnership">
								<FormSection>
									<Label large>Đơn vị hợp tác</Label>
									<FormInline>
										<FormGroup>
											<Label>Đơn vị thiết kế</Label>
											<FormControl maxWidth={270}
											             value={_.get(architect, 'name')}
											             onChange={this.updatePartnership(_.get(architect, 'companyId'))}
											             block/>
										</FormGroup>
										<FormGroup>
											<Label>Đơn vị hợp tác đầu tư</Label>
											<FormControl maxWidth={270}
											             value={_.get(investorPartner, 'name')}
											             onChange={this.updatePartnership(_.get(investorPartner, 'companyId'))}
											             block/>
										</FormGroup>
									</FormInline>
									<FormInline>
										<FormGroup>
											<Label>Đơn vị thi công</Label>
											<FormControl maxWidth={270}
											             value={_.get(constructor, 'name')}
											             onChange={this.updatePartnership(_.get(constructor, 'companyId'))}
											             block/>
										</FormGroup>
										<FormGroup>
											<Label>Đơn vị quản lý và giám sát thi công</Label>
											<FormControl maxWidth={270}
											             value={_.get(supervisor, 'name')}
											             onChange={this.updatePartnership(_.get(supervisor, 'companyId'))}
											             block/>
										</FormGroup>
									</FormInline>
									<FormInline>
										<FormGroup>
											<Label>Đơn vị quản lý</Label>
											<FormControl maxWidth={270}
											             value={_.get(operator, 'name')}
											             onChange={this.updatePartnership(_.get(operator, 'companyId'))}
											             block/>
										</FormGroup>
										<FormGroup>
											<Label>Ngân hàng bão lãnh</Label>
											<FormControl maxWidth={270}
											             value={_.get(guaranteeing, 'name')}
											             onChange={this.updatePartnership(_.get(guaranteeing, 'companyId'))}
											             block/>
										</FormGroup>
									</FormInline>
									<FormGroup>
										<CustomFields
											title="Ngân hàng hỗ trợ vay vốn"
											prototype={[{name: "name"}]}
											data={fundingBank}
											onChange={this.updateFundingBank()}
										/>
									</FormGroup>
								</FormSection>
							</div>
						</VerticalSectionWrapper>
					</div>

				</Layout>
			</Wrapper>
		)
	}
}

export default ProjectDetail;