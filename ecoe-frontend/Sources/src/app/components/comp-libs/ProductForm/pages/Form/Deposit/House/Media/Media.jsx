import React, { Component } from 'react';
import { FormGroup, Label, FormControl, Btn, FormSection, CloseButton, ImgCard } from '../../../../../ui';
import { Description, Wrapper } from './Wrapper';
import { Gallery } from '../../../../../ImagePicker';
import * as _ from 'lodash';
import { FormData, FormComponent } from '../../../../../store';

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
					<FormSection>
						<FormGroup>
							<Label large bold>Hình ảnh </Label>
						</FormGroup>
						<FormGroup>
							<Label>Tổng quan </Label>
							<div>
								<Description small>Loại hình PNG.JPG.PGF, kích thước tối đa 5MB. Tối đa 6 hình</Description>
							</div>
							<FormComponent>
								<Gallery limit={6} name="overview"/>
							</FormComponent>
						</FormGroup>
						<FormGroup>
							<Label>Mặt bằng </Label>
							<div>
								<Description small>Loại hình PNG.JPG.PGF, kích thước tối đa 5MB. Tối đa 6 hình</Description>
							</div>
							<FormComponent>
								<Gallery limit={6} name="floorPlan"/>
							</FormComponent>
						</FormGroup>
						<FormGroup>
							<Label>Nhà mẫu </Label>
							<div>
								<Description small>Loại hình PNG.JPG.PGF, kích thước tối đa 5MB. Tối đa 6 hình</Description>
							</div>

							<FormComponent>
								<Gallery limit={6} name="showFlat"/>
							</FormComponent>
						</FormGroup>
						<FormGroup>
							<Label>Vị trí </Label>
							<div>
								<Description small>Loại hình PNG.JPG.PGF, kích thước tối đa 5MB. Tối đa 6 hình</Description>
							</div>
							<FormComponent>
								<Gallery limit={6} name="location"/>
							</FormComponent>
						</FormGroup>
						<FormGroup>
							<Label>Hình 360 </Label>
							<div>
								<Description small>Loại hình PNG.JPG.PGF, kích thước tối đa 5MB. Tối đa 6 hình</Description>
							</div>
							<FormComponent>
								<Gallery limit={6} name="image360"/>
							</FormComponent>
						</FormGroup>
						<FormGroup>
							<Label>Video</Label>
							<FormControl placeholder="Dán link video từ youtube" block/>
						</FormGroup>
						<FormGroup>
							<Label>Street view</Label>
							<FormControl placeholder="Dán link street view từ google maps" block/>
						</FormGroup>
						<FormGroup>
							<Label>3D scan</Label>
							<FormControl placeholder="Dán link 3D scan từ Matterport" block/>
						</FormGroup>
						<Btn primary onClick={this.props.nextStep}><span>BƯỚC 4: THÔNG TIN CHI TIẾT</span></Btn>
					</FormSection>

				</Wrapper>
			</FormData>

		)
	}
}

export default Media;