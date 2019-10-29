import React, { Component } from 'react';
import { FormGroup, Label, FormControl, Btn, FormSection, CloseButton, ImgCard } from '../../../../ui';
import { Description, Wrapper } from './Wrapper';
import {Gallery} from '../../../../ImagePicker';
import _ from 'lodash';

import Model from '../../../../store/Project';

class Media extends Component {

	constructor(props) {
		super(props);
		this.state = this.getDefaultState();
	}


	getDefaultState = () => {
		return {
			general: [],
			floorPlan: [],
			location: [],
			image360: [],
			showFlat: [],
			video: '',
			streetView: '',
			link3D: ''
		}
	};

	componentWillMount() {
		this.setState(Model.get('step3'));
	}

	updateField = (i) => (e) => {
		let {name, value} = e.target;
		this.setState((state) => {
			_.set(state, name, value);
			Model.set(['step3'], state);
			return state;
		});
	};


	render() {

		let { general, floorPlan, location, image360, showFlat, video, streetView, link3D } = this.state;

		return (
			<Wrapper>
				<FormSection>
					<FormGroup>
						<Label large bold>Hình ảnh </Label>
					</FormGroup>
					<FormGroup>
						<Label>Tổng quan </Label>
						<div>
							<Description small>Loại hình PNG.JPG.PGF, kích thước tối đa 5MB. Tối đa 6 hình</Description>
						</div>
						<Gallery limit={6} name="general" defaultValue={general} onChange={this.updateField()}/>
					</FormGroup>
					<FormGroup>
						<Label>Mặt bằng </Label>
						<div>
							<Description small>Loại hình PNG.JPG.PGF, kích thước tối đa 5MB. Tối đa 6 hình</Description>
						</div>
						<Gallery limit={6} name="floorPlan" defaultValue={floorPlan} onChange={this.updateField()}/>
					</FormGroup>
					<FormGroup>
						<Label>Nhà mẫu </Label>
						<div>
							<Description small>Loại hình PNG.JPG.PGF, kích thước tối đa 5MB. Tối đa 6 hình</Description>
						</div>
						<Gallery limit={6} name="showFlat" defaultValue={showFlat} onChange={this.updateField()}/>
					</FormGroup>
					<FormGroup>
						<Label>Vị trí </Label>
						<div>
							<Description small>Loại hình PNG.JPG.PGF, kích thước tối đa 5MB. Tối đa 6 hình</Description>
						</div>
						<Gallery limit={6} name="location" defaultValue={location} onChange={this.updateField()}/>
					</FormGroup>
					<FormGroup>
						<Label>Hình 360 </Label>
						<div>
							<Description small>Loại hình PNG.JPG.PGF, kích thước tối đa 5MB. Tối đa 6 hình</Description>
						</div>
						<Gallery limit={6} name="image360" defaultValue={image360} onChange={this.updateField()}/>
					</FormGroup>
					<FormGroup>
						<Label>Video</Label>
						<FormControl type="url" placeholder="Dán link video từ youtube" name="video" value={video} onChange={this.updateField()} block/>
					</FormGroup>
					<FormGroup>
						<Label>Street view</Label>
						<FormControl placeholder="Dán link street view từ google maps" name="streetView" value={streetView} onChange={this.updateField()} block/>
					</FormGroup>
					<FormGroup>
						<Label>3D scan</Label>
						<FormControl type="url" placeholder="Dán link 3D scan từ Matterport" name="link3D" value={link3D} onChange={this.updateField()} block/>
					</FormGroup>
					<Btn primary onClick={this.props.nextStep}>
						<span>BƯỚC 4: THÔNG TIN CHI TIẾT</span>
					</Btn>
				</FormSection>

			</Wrapper>
		)
	}
}

export default Media;