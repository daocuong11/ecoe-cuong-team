import React, { Component } from 'react';
import { FormGroup, Label, FormControl, Btn, FormSection, CloseButton, ImgCard, FormInline, Layout, Left, Sticky, FlexRow } from '../../../../../ui';
import { Description, Wrapper, Title, CheckBoxWrap, CheckBox, CheckBoxBg, Center, DotLine, PdLeft, InsideContainer, Div, Flash, SelectWrapper } from './Wrapper';
import plusIcon from 'images/icons/plus-sign.18x18.svg';
import Select from 'UIElement/Select';
import Radio from 'UIElement/Radio';
import OptionCard from 'UIElement/OptionCard';

import {Gallery} from '../../../../../ImagePicker';
import { CustomFields } from '../../../../../CustomFields';
import { AddFields } from '../../../../../AddFields';
import { menuSectionDetail } from "globalConstants/departmentMenu";
import VerticalNavbar, { VerticalSectionWrapper } from "globalComponents/VerticalSection";
import { LivingRoom, DiningRoom, BedRoom, BathRoom } from '../../../../../Furniture';
import { Convenience } from '../../../../../Convenience/';
import { ProjectInfo } from '../../../../../ProjectInfo';
import * as _ from 'lodash';


class DepartmentInfo extends Component {

	constructor(props) {
		super(props);
		this.state = this.getDefaultState();
	}


	getDefaultState = () => {
		return {
			overview: [],
			floorPlan: [],
			location: [],
			image360: [],
			showFlat: []
		}
	};

	render() {
        const livingRoom = ["Sofa",'Tivi','Tủ giày dép','Kệ sách','Bộ bàn ăn','Bàn Sofa'];
        const diningRoom = ['Kệ bếp','Bồn rửa chén','Máy hút mùi','Lò vi sóng','Lò nướng','Tủ lạnh','Máy rửa chén','Bếp'];
        const bedRoom = ['Giường','Tủ quần áo','Gối/nệm','Bàn làm việc','Bàn trang điểm'];
        const bathRoom = ['Toilet','Lavabo','Bồn tắm nằm','Quạt hút mùi','Máy nước nóng','Máy giặt'];
        const inside1 = ['Trường học','Bệnh viện','Siêu thị/ Khu mua sắm','Nhà hàng/ Cafe','Ngân hàng/ ATM','Công viên'];
        const inside2 = ['Hồ bơi','Gym','Phòng xông hơi/ Spa','Sân thể thao đa năng','Khu BBQ','Phòng sinh hoạt cộng đồng'];
        const inside3 = ['Thẻ từ/ Video call','Wifi miễn phí','Bãi để ôtô','Bãi để xe máy'];
		let { overview, floorPlan, location, image360, showFlat } = this.state;

		return (
			<Wrapper>
                <Layout left>
                    <Left>
						<Sticky top="10px">
							<VerticalNavbar items={menuSectionDetail} offset={-150} duration={500} delay={0}/>
						</Sticky>
					</Left>
                    <Div>
                        <VerticalSectionWrapper items={menuSectionDetail}>
                            <FormSection name="general">
                                <FormGroup>
                                    <Label large>Tổng quan</Label>
                                    <Description small>Thông tin để khách hàng xem tổng quan BĐS của bạn</Description>
                                </FormGroup>
                                <FormInline>
                                    <Label require>Trạng thái</Label>
                                    <div>
                                        <Radio name="state">Đang bán</Radio>
                                        <Radio name="state">Đã bán</Radio>
                                    </div>
                                </FormInline>
                                <FormGroup>
                                    <Title>Địa chỉ</Title>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Số nhà/ Mã căn hộ</Label>
                                    <Description>Không bắt buộc - Nếu điền thông tin sẽ không hiển thị trên kho hàng chung & giao diện người mua</Description>
                                    <FormControl placeholder="Nhập số nhà/ Mã căn hộ" width={264} block/>
                                </FormGroup>
                                <FormGroup>
                                    <Label require>Tên đường</Label>
                                    <FormControl placeholder="Nhập tên đường" width={264} block></FormControl>
                                </FormGroup>
                                <FormInline>
                                    <FormGroup>
                                        <Label require>Tỉnh/Thành phố</Label>
                                        <Select width={166} block>
                                            <option value="Thành Phố">Thành phố</option>
                                            <option value="Thành Phố">Thành phố</option>
                                            <option value="Thành Phố">Thành phố</option>
                                            <option value="Thành Phố">Thành phố</option>
                                            <option value="Thành Phố">Thành phố</option>
                                            <option value="Thành Phố">Thành phố</option>
                                        </Select>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label require>Quận/Huyện</Label>
                                        <Select width={166} block>
                                            <option value="Quận">Quận</option>
                                            <option value="Huyện">Huyện</option>
                                            <option value="Quận">Quận</option>
                                            <option value="Huyện">Huyện</option>
                                            <option value="Quận">Quận</option>
                                            <option value="Huyện">Huyện</option>
                                        </Select>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label require>Phường/Xã</Label>
                                        <Select width={166} block>
                                            <option value="Phường">Phường</option>
                                            <option value="Xã">Xã</option>
                                            <option value="Phường">Phường</option>
                                            <option value="Xã">Xã</option>
                                            <option value="Phường">Phường</option>
                                            <option value="Xã">Xã</option>
                                        </Select>
                                    </FormGroup>
                                </FormInline>
                                <FormInline>
                                    <FormGroup>
                                        <Label require>Tầng</Label>
                                        <FormControl placeholder="Số tầng" width={166} block></FormControl>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label require>Tháp/block</Label>
                                        <FormControl placeholder="Nhập tháp/block" width={166} block></FormControl>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label require>Diện tích (m2)</Label>
                                        <FormControl width={166} block></FormControl>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label require>Tình trạng bàn giao</Label>
                                            <Select width={166} block>
                                                <option value="Chưa hoàn thiện">Chưa hoàn thiện</option>
                                                <option value="Thô">Thô</option>
                                                <option value="Hoàn thiện cơ bản">Hoàn thiện cơ bản</option>
                                                <option value="Hoàn thiện nội thất">Hoàn thiện nội thất</option>
                                            </Select>
                                    </FormGroup>
                                </FormInline>
                                <FormInline>
                                    <FormGroup>
                                        <Label require>Số phòng ngủ</Label>
                                        <FormControl width={166} block placeholder="02"></FormControl>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label require>Số phòng tắm</Label>
                                        <FormControl width={166} block placeholder="01"></FormControl>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label require>Hướng cửa chính</Label>
                                        <Select width={166} block>
                                            <option value="Đông">Đông</option>
                                            <option value="Đông Nam">Đông Nam</option>
                                            <option value="Nam">Nam</option>
                                            <option value="Tây Nam">Tây Nam</option>
                                            <option value="Tây">Tây</option>
                                            <option value="Tây Bắc">Tây Bắc</option>
                                            <option value="Bắc">Bắc</option>
                                            <option value="Đông Bắc">Đông Bắc</option>    
                                        </Select>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label require>Hướng ban công</Label>
                                        <Select width={166} block>
                                            <option value="Đông">Đông</option>
                                            <option value="Đông Nam">Đông Nam</option>
                                            <option value="Nam">Nam</option>
                                            <option value="Tây Nam">Tây Nam</option>
                                            <option value="Tây">Tây</option>
                                            <option value="Tây Bắc">Tây Bắc</option>
                                            <option value="Bắc">Bắc</option>
                                            <option value="Đông Bắc">Đông Bắc</option>    
                                        </Select>
                                    </FormGroup>
                                </FormInline>
                                <FormInline>
                                    <FormGroup>
                                        <Label require>Pháp lý</Label>
                                        <Select width={166} block>
                                            <option value="Hợp đồng mua bán">Hợp đồng mua bán</option>
                                            <option value="Sổ đỏ">Sổ đỏ</option>
                                            <option value="Sổ hồng">Sổ hồng</option>
                                            <option value="Khác">Khác</option>
                                        </Select>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label require>Số năm sở hữu</Label>
                                        <Select width={166} block>
                                            <option value="50 năm">50 năm</option>
                                            <option value="Lâu dài">Lâu dài</option>
                                        </Select>
                                    </FormGroup>
                                </FormInline>
                            </FormSection>
                            <FormSection name="advantage">
                                <FormGroup>
                                    <Label large>Ưu điểm nổi bật</Label>
                                    <Description small>Chọn ưu điểm bạn cho là nổi bật nhất BĐS</Description>
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
                            </FormSection>
                            <FormSection name="location">
                                <FormGroup>
                                    <Label large>Vị trí</Label>
                                    <Description>Check in địa điểm dự án của bạn để chúng tôi xác định tiện ích xung quanh, tình trạng ngập nước & kẹt xe</Description>
                                    <FormControl placeholder="Nhập chính xác địa chỉ dự án của bạn" width={560}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Hình ảnh diện tích xung quanh</Label>
                                        <Gallery limit={6}/>
                                </FormGroup>
                                <FormGroup>
                                    <CustomFields
                                        title="Bệnh viện"
                                        description="Tối đa 3 tiện ích"
                                        prototype={[{name: "hospital", title: "Tên bệnh viện"}, {name: "distance", title: "Khoảng cách"}]}
                                        limit={3}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <CustomFields
                                        title="Trường học"
                                        description="Tối đa 3 tiện ích"
                                        prototype={[{name: "school", title: "Tên trường học"}, {name: "distance", title: "Khoảng cách"}]}
                                        limit={3}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <CustomFields
                                        title="Siêu thị/ chợ/ trung tâm thương mại"
                                        description="Tối đa 3 tiện ích"
                                        prototype={[{name: "market", title: "Tên"}, {name: "distance", title: "Khoảng cách"}]}
                                        limit={3}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <CustomFields
                                        title="Khác"
                                        description="Tối đa 3 tiện ích"
                                        prototype={[{name: "others", title: "Tên tiện ích"}, {name: "distance", title: "Khoảng cách"}]}
                                        limit={3}
                                    />
                                </FormGroup>
                            </FormSection>
                            <FormSection name="utility">
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
                            </FormSection>
                            <FormSection name="info">
                                <ProjectInfo isDepartment/>
                            </FormSection>
                        </VerticalSectionWrapper>
                    </Div>                            
                </Layout>
			</Wrapper>
		)
	}
}

export default DepartmentInfo;