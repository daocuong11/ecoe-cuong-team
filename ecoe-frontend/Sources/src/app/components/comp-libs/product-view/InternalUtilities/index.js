import React from 'react';
import PropTypes from 'prop-types';
import Wrapper,{TitleSection, WrapperItem, Item, Title,SubTitle} from './Wrapper';
import * as _ from "lodash";
import {getUrlImage} from "globalUtils/getIcon";

const InternalUtilities = (props) => {
    let rowNumber = 8;
    return (
        <Wrapper> 
            <TitleSection>{_.get(props,'title')}</TitleSection>
            {props.subTitle && <SubTitle>{_.get(props,'subTitle')}</SubTitle>}
            <WrapperItem rowNumber={rowNumber}>
                {
                    _.map(props.items, function(item){
                        let icon = getUrlImage(_.get(item,'icon'),'internal-utilities');
                        return(
                            <Item key={_.get(item,'id')} rowNumber={rowNumber}>
                                <Title icon={icon}>{_.get(item,'name')}</Title>     
                            </Item>
                        )
                    })
                }               
            </WrapperItem>
        </Wrapper>
    );
}

InternalUtilities.propTypes = {
    items: PropTypes.array,
};

export default InternalUtilities;