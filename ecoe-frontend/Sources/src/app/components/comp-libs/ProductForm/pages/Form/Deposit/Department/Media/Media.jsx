import React, { Component } from 'react';
import { FormGroup, Label, FormControl, Btn, CloseButton, ImgCard } from '../../../../../ui';
import { Description, Wrapper, ContentSection, Position } from './Wrapper';
import plusIcon from 'images/icons/plus-sign.18x18.svg';
import { menuSectionMedia } from "globalConstants/departmentMenu";
import { FormData, FormComponent } from '../../../../../store';
import {ImagePicker, Gallery} from '../../../../../ImagePicker';
import * as _ from 'lodash';


class Media extends Component {

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
		let { overview, floorPlan, location, image360, showFlat } = this.state;
		return (
			<FormData name="medias" root>
				<Wrapper>
					<FormGroup>
						<Label>Tổng quan </Label>
						<Description small>Loại hình PNG.JPG.PGF, kích thước tối đa 5MB. Tối đa 6 hình</Description>
						<FormComponent>
							<Gallery limit={6} name="overview" />
						</FormComponent>
					</FormGroup>
					<FormGroup>
						<Label>Mặt bằng </Label>
						<Description small>Loại hình PNG.JPG.PGF, kích thước tối đa 5MB. Tối đa 6 hình</Description>
						<FormComponent>
							<Gallery limit={6} name="floorPlan" />
						</FormComponent>
					</FormGroup>
					<FormGroup>
						<Label>Nhà mẫu </Label>
						<Description small>Loại hình PNG.JPG.PGF, kích thước tối đa 5MB. Tối đa 6 hình</Description>
						<FormComponent>
							<Gallery limit={6} name="showFlat" />
						</FormComponent>
					</FormGroup>
					<FormGroup>
						<Label>Vị trí </Label>
						<Description small>Loại hình PNG.JPG.PGF, kích thước tối đa 5MB. Tối đa 6 hình</Description>
						<FormComponent>
							<Gallery limit={6} name="location" />
						</FormComponent>
					</FormGroup>
					<FormGroup>
						<Label>Hình 360 </Label>
						<Description small>Loại hình PNG.JPG.PGF, kích thước tối đa 5MB. Tối đa 6 hình</Description>
						<FormComponent>
							<Gallery limit={6} name="image360" />
						</FormComponent>
					</FormGroup>
					<FormGroup>
						<Label>Video</Label>
						<FormControl placeholder="Dán link video từ youtube" block />
					</FormGroup>
					<FormGroup>
						<Label>Street view</Label>
						<FormControl placeholder="Dán link street view từ google maps" block />
					</FormGroup>
					<FormGroup>
						<Label>3D scan</Label>
						<FormControl placeholder="Dán link 3D scan từ Matterport" block />
					</FormGroup>
					<Btn primary onClick={this.props.nextStep}><span>Bước 4: Thông tin chi tiết</span></Btn>
				</Wrapper>
			</FormData>

		)
	}
}

export default Media;