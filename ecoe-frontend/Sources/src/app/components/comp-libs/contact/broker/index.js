import React, { Component } from 'react';
import * as _ from "lodash";

import {Wrapper, ContentSection, Button, Inline, ContactContainer, Title, ContactIcon, Ul, Li, Line, SortContainer, CheckAllWrap, ActionContainer, ContactSection } from './Wrapper';
import { FormGroup, FormInline, Btn, Label } from '../../ProductForm/ui';
import SearchContent from './Search';
import HeaderBar from './HeaderBar';
import ContactInfo from './Info';
import ProductStatus from "globalComponents/ProductStatus";

import CheckBorder from "UIElement/CheckBox/CheckBorder";
import CheckItem from '../../search/CheckItem';
import CheckList from "../../search/CheckList";
import List from '../../search/List';
import { BrokerContact } from "constants/contactInfo";

const ListSort = [{
        key: "NEW",
        name: "Mới nhất",
        value: true
    },
    {
        key: "AZ",
        name: "A - Z",
        value: false
    }
];


class Broker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            broker: {
                id: "1",
                name: "Môi giới",
                active: true
            },
            customer: {
                id: "2",
                name: "Khách hàng",
                active: false
            }
        };
    }

    checkListChange = (listItem) => {
        console.log(listItem);
    };

    selectContact = (id) => {
        console.log("Run");
        if (id === 1) {
            this.setState(
                {
                     broker: {
                        id: "1",
                        name: "Môi giới",
                        active: true
                    },
                    customer: {
                        id: "2",
                        name: "Khách hàng",
                        active: false
                    }
                }
            )
        } else if (id === 2) {
            this.setState(
                {
                    broker: {
                        id: "1",
                        name: "Môi giới",
                        active: false
                    },
                    customer: {
                        id: "2",
                        name: "Khách hàng",
                        active: true
                    }
                }
            )
        } 
    }

    render() {
        let list = BrokerContact;
        return (
            <Wrapper>
                <ContentSection column={3}>
                    <ContactContainer>
                        <ContactIcon/>
                        <Title>Danh bạ</Title>
                        <Ul>
                            <Li active={this.state.broker.active} onClick={() => this.selectContact(1)}>Môi giới</Li>
                            <Line/>
                            <Li active={this.state.customer.active} onClick={() => this.selectContact(2)}>Khách hàng</Li>
                        </Ul>
                    </ContactContainer>
                </ContentSection>
                <ContentSection column={9} white padding>
                        <FormGroup>
                            <Label large>
                                Danh bạ môi giới
                            </Label>                            
                        </FormGroup>
                        <Inline>
                            <Button header>Môi giới</Button>
                            <Button header left={-1}>Nhóm</Button>
                        </Inline>
                        <SearchContent placeholder="Nhập thông tin môi giới, thông tin nhóm cần tìm kiếm"/>
                        <HeaderBar title="môi giới" description="(165 môi giới)" button="Thêm môi giới"/>
                        <CheckList onChange={this.checkListChange}>
                            {
                                ({onChange, checkAll, data}) => (
                                    <div>
                                        <ActionContainer>
                                            <CheckAllWrap>
                                                <CheckBorder onChange={(e) => checkAll(e.target.checked, list, 'id')} checked={_.isEqual(_.size(data), _.size(list))} name="Chọn tất cả"
                                                            indeterminate={_.size(data) > 0 && _.size(data) < _.size(list)}/>
                                            </CheckAllWrap>
                                            <SortContainer>
                                                <ProductStatus label="Xếp theo" titleSort="Xếp theo" productStatusList={ListSort} TypeDropdown={2} />
                                            </SortContainer>
                                        </ActionContainer>
                                        <div>
                                            {
                                                _.map(list, (item, index) => (
                                                    <ContactSection key={index}>
                                                        <CheckItem
                                                                type="vertical"
                                                                id={item.id}
                                                                onChange={onChange}
                                                                checked={_.includes(data, item.id)}
                                                        >
                                                            <ContactInfo name={item.name} aliasName={item.aliasName} phone={item.phone} domain={item.domain} avatarUrl={item.avatarUrl} connectHistoryTotal={item.connectHistoryTotal}/>
                                                        </CheckItem>
                                                    </ContactSection>
                                                ))
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        </CheckList>                        
                </ContentSection>
            </Wrapper>
        )
    }

}

export default Broker;