import React from 'react';
import Wrapper, { Intro, Title, Description } from './Wrapper';
import Logo from '../../../elements/Logo';
import H1 from '../../../elements/H1';

const EcoeBanner = (props) => {
  return (
    <Wrapper>
        <Intro>
            <Title>
                <H1>Độc quyền từ Ecoe</H1>
                <Logo />
            </Title>
            <Description>
                Bất động sản chất lượng cao, tọa lạc tại các vị trí vàng với hoa hồng hấp dẫn
            </Description>
        </Intro>
    </Wrapper>
  );
};

export default EcoeBanner;