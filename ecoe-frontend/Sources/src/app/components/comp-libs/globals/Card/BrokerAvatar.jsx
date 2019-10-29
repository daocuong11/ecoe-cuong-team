
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Avatar from '../Avatars/Avatar';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.p`
  font-size: 1rem;
  line-height: 1rem;
  font-weight: ${props=>props.theme.fontWeight.extraBold};
  color: ${props=>props.theme.textColor.primaryBlue};
  text-transform: capitalize;
`;

const Expert = styled.p`
  font-size: .8rem;
  color: #5a6777;
  line-height: 1rem;
`;

const BrokerAvatar = (props) => {
    let {brokerAvatar, brokerName} = props.broker;
    return (     
        <Wrapper>
            <Avatar size={props.size} brokerAvatar={brokerAvatar} brokerName={brokerName.slice(0, 2)} />
            <div>
                <Name>{brokerName}</Name>
                <Expert>Chuyên viên tư vấn</Expert>
            </div>
        </Wrapper>
    );
}

BrokerAvatar.propTypes = {
  broker: PropTypes.object,
  size: PropTypes.number,
};

export default BrokerAvatar;