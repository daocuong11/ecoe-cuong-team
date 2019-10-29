import React, { Component, Fragment } from 'react';
import {Container, Header, Main, SectionWrap, Title, SubTitle} from "../../Wrapper";
import Navigation from "../../Navigation";
import ProductType from "./ProductType/ProductType";

class Home extends Component {

	render() {
		return (
			<Fragment>
				<Header>
					<Container>
						<Navigation />
					</Container>
				</Header>

				<Main>
					<SectionWrap white>
						<Container>
							<div style={{marginBottom: 24}}>
								<Title>Đăng BĐS</Title>
								<SubTitle>Chọn loại bất động sản bạn muốn đăng tải</SubTitle>
							</div>
							<ProductType />
						</Container>
					</SectionWrap>

				</Main>
			</Fragment>
		)
	}
}

export default Home;