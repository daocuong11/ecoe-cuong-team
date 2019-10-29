import React from 'react';
import PropTypes from 'prop-types';
import Wrapper, { TitleSection, ContentSection, Description, WrapperCheckbox, WrapperLabel, WrapperRow, Rate } from './Wrapper';
import CheckBox from "UIElement/CheckBox";
import * as _ from "lodash";
import SliderProgressBar from './SliderProgressBar';
import DropdownCustom from '../DropdownCustom';
import LoanInfo from './LoanInfo';
import SelectCustom from '../SelectCustom';


const bankList = [
    { key: "VCB", name: "Vietcombank", value: "0.012" },
    { key: "ACB", name: "ACB", value: "0.014" },
    { key: "SCB", name: "SCB", value: "0.015" },
    { key: "SC", name: "SC", value: "0.018" },
]


class LoanEstimates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: 0,
            total: 0,
            loanTerm: 0
        }
    }

    render() {
        const { rate } = this.state;
        return (
            <Wrapper>
                <TitleSection>{_.get(this.props, 'title')}</TitleSection>
                <Description>*Công cụ tính toán trên website chỉ mang tính chất tham khảo</Description>
                <LoanInfo rate={this.state.rate} total={this.state.total} loanTerm={this.state.loanTerm} />
                <WrapperRow>
                    <ContentSection column={4}>
                        <WrapperCheckbox>
                            <CheckBox
                                name="Số tiền trả hàng tháng cố định"
                                value={true}
                                updateCheckbox={(key, value) => { }}
                            />
                        </WrapperCheckbox>
                    </ContentSection>
                    <ContentSection column={4}>
                        <WrapperCheckbox>
                            <CheckBox
                                name="Số tiền trả hàng tháng giảm"
                                value={false}
                                updateCheckbox={(key, value) => { }}
                            />
                        </WrapperCheckbox>
                    </ContentSection>
                </WrapperRow>

                <WrapperRow>
                    <ContentSection column={4}>
                        <WrapperLabel unit={'(VNĐ)'}>Số tiền vay</WrapperLabel>
                    </ContentSection>
                    <ContentSection column={8}>
                        <SliderProgressBar domain={[0, 200000000000]} defaultValues={[500000000]} step={500000} onUpdate={(value) => this.setState({ total: value })} />
                    </ContentSection>
                </WrapperRow>
                <WrapperRow>
                    <ContentSection column={4}>
                        <WrapperLabel unit={'(Năm)'}>Kỳ hạn vay</WrapperLabel>
                    </ContentSection>
                    <ContentSection column={8}>
                        <SliderProgressBar domain={[1, 40]} defaultValues={[10]} onUpdate={(value) => this.setState({ loanTerm: value })} />
                    </ContentSection>
                </WrapperRow>
                <WrapperRow>
                    <ContentSection column={4}>
                        <WrapperLabel unit={'%/ năm'}>Lãi suất</WrapperLabel>
                    </ContentSection>
                    <ContentSection column={6}>
                        {<DropdownCustom position={'top center'} maxWidth={'170px'} items={bankList} onChange={(value) => this.setState({ rate: value })} borderBottom={true}/> }
                       {/* <SelectCustom items={bankList} onChange={(value)=>this.setState({rate: value})} /> */}
                    </ContentSection>
                    <ContentSection column={2}>
                        <Rate>{(rate * 100).toFixed(1)}%</Rate>
                    </ContentSection>
                </WrapperRow>


            </Wrapper>
        );
    }
}
LoanEstimates.propTypes = {
    title: PropTypes.string,
};

export default LoanEstimates;