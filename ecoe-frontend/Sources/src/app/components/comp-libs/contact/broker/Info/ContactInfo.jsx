import React, { Component, Fragment } from 'react'
import { Wrapper, ShowInline, Margin, Title, Content, ContentSection, History} from './Wrapper';
import Avatar from 'globalComponents/Avatars/Avatar';
import LButtonCard from 'globalComponents/Buttons/LButtonCard';
import { ACT_EDIT, ACT_DELETE} from "constants/labelActionForCard";

class ContactInfo extends Component {

    constructor(props) {
        super(props);
        this.state = this.initState();
    }
    initState = () => {
        return {};
    };
    render() {
        let props = this.props;
        return(
            <Wrapper>
                <Margin top={20}>
                    <ShowInline>            
                        <ContentSection column={4} left={20}>
                            <ShowInline>
                                <Avatar size={48} brokerAvatar={props.avatarUrl}></Avatar>
                                <Margin left={12}>
                                    <Title>{props.aliasName}</Title>
                                    <Content>{props.name}</Content>
                                    <History>Lịch sử kết nối ({props.connectHistoryTotal}+)</History>
                                </Margin>          
                            </ShowInline>
                        </ContentSection>
                        <ContentSection column={2}>
                            <Title>Liên hệ</Title>
                            <Content>{props.phone}</Content>
                        </ContentSection>
                        <ContentSection column={4}>
                            <Title>Website</Title>
                            <Content>{props.domain}</Content>
                        </ContentSection>
                        <ContentSection column={2}>
                            <Margin top={20}>
                                <ShowInline>
                                    <LButtonCard label={ACT_EDIT} onClick={() => alert('It works!')}></LButtonCard>
                                    <LButtonCard label={ACT_DELETE} onClick={() => alert('It works!')}></LButtonCard>
                                </ShowInline>
                            </Margin>
                        </ContentSection>
                    </ShowInline>
                </Margin>
            </Wrapper>
        )
    }
}

export default ContactInfo;