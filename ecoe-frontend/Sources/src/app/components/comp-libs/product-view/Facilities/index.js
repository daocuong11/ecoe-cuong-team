import React from 'react';
import PropTypes from 'prop-types';
import Wrapper, { TitleSection, WrapperItem, Row, Column, TitleItem, Item, Title, TitleParent, P } from './Wrapper';
import * as _ from "lodash";
import { getUrlImage } from "globalUtils/getIcon";
import InternalUtilities from '../InternalUtilities';

const Facilities = (props) => {
    let interior = props.facilities.interior;
    let internalUtilities = props.facilities.internalUtilities;


    return (
        <Wrapper>
            <TitleSection>{_.get(props, 'title')}</TitleSection>
            <WrapperItem>
                <TitleItem>Nội thất</TitleItem>
                <Row>
                    {
                        _.map(interior, function (item) {
                            let icon = getUrlImage(_.get(item, 'icon'), 'facilities');
                            return (
                                <Item column={3}>
                                    <Column>
                                        <TitleParent icon={icon}>{_.get(item, 'name')}</TitleParent>
                                        <div key={_.get(item, 'id')}>
                                            {
                                                _.map(item.data, function (itemChild) {
                                                    return (
                                                        <P key={_.get(itemChild, 'id')}>{_.get(itemChild, 'name')}</P>
                                                    )
                                                })
                                            }
                                        </div>
                                    </Column>
                                </Item>
                            )
                        })
                    }
                </Row>
            </WrapperItem>

            <InternalUtilities subTitle="Tiện ích" items={internalUtilities} />
        </Wrapper>
    );
}

Facilities.propTypes = {
    facilities: PropTypes.object,
};

export default Facilities;