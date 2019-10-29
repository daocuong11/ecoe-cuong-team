import React from 'react';
import PropTypes from 'prop-types';
import { ContentSection } from '../Wrapper';
import Wrapper, { LabelTitle, Item, LabelMoney, RepaymentSchedule, WrapperChartJs } from './Wrapper';
import { numberFormat } from "globalUtils/format";
import * as _ from "lodash";
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: [
        'Số tiền trả hàng tháng đầu',
        'Tổng số tiền lãi phải trả',
        'Tống số tiền phải trả',
    ],
    datasets: [{
        data: [],
        backgroundColor: [
            '#1CBFC6',
            '#DA6744',
            '#183253',
        ],
        hoverBackgroundColor: [
            '#1CBFC6',
            '#DA6744',
            '#183253',
        ]
    }]
};


const LoanInfo = (props) => {
    let totalRate = _.get(props, 'rate') * _.get(props, 'total') * _.get(props, 'loanTerm');
    let bindData = data;
    bindData.datasets[0].data = [_.get(props, 'total'), totalRate, _.get(props, 'total')]
    return (
        <Wrapper>
            <ContentSection column={4}>
                <WrapperChartJs>
                    <Doughnut data={bindData}
                        options={
                            {
                                legend: { display: false, },
                                elements: { arc: { borderWidth: 0 } },
                                tooltips: {
                                    callbacks: {
                                        title: function (tooltipItem, data) {
                                            return data['labels'][tooltipItem[0]['index']];
                                        },
                                        label: function (tooltipItem, data) {
                                            return numberFormat(data['datasets'][0]['data'][tooltipItem['index']]) + ' VNĐ';
                                        },
                                        afterLabel: function (tooltipItem, data) {
                                            var dataset = data['datasets'][0];
                                            var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
                                            return '(' + percent + '%)';
                                        }
                                    },
                                    // backgroundColor: '#FFF',
                                    // titleFontSize: 16,
                                    // titleFontColor: '#0066ff',
                                    // bodyFontColor: '#000',
                                    // bodyFontSize: 14,
                                    // displayColors: false
                                }

                            }
                        }
                    />
                </WrapperChartJs>
            </ContentSection>
            <ContentSection column={5}>
                <Item>
                    <LabelTitle>Số tiền trả tháng đầu tại lãi suất {(_.get(props, 'rate') * 100).toFixed(1)}% (VNĐ)</LabelTitle>
                    <LabelMoney primary color={'#1CBFC6'}>{numberFormat(_.get(props, 'total'))} </LabelMoney>
                    <RepaymentSchedule onClick={() => alert("Xem lịch trả nợ khoản vay")}>Xem lịch trả nợ khoản vay</RepaymentSchedule>
                </Item>
            </ContentSection>
            <ContentSection column={3}>
                <Item>
                    <LabelTitle>Tổng số tiền phải trả (VNĐ)</LabelTitle>
                    <LabelMoney color={'#183253'}>{numberFormat(_.get(props, 'total'))}</LabelMoney>
                </Item>
                <Item>
                    <LabelTitle>Tổng số tiền lãi phải trả (VNĐ)</LabelTitle>
                    <LabelMoney color={'#DA6744'}>{numberFormat(totalRate)}</LabelMoney>
                </Item>
            </ContentSection>
        </Wrapper>
    );
}

export default LoanInfo;