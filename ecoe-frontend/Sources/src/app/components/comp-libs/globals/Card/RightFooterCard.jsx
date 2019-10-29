import React, { Fragment } from 'react';
import Wrapper from './Wrapper';
import PropTypes from 'prop-types';

import FinanceCard from './FinanceCard';

import { SD_FO } from "constants/domainType";

import LButtonCard from '../Buttons/LButtonCard';
import DropdownFunctionCard from '../../../elements/DropdownFunctionCard';

import { ACT_EDIT, ACT_DELETE, ACT_HIDDEN, ACT_HIGHLIGHT } from "constants/labelActionForCard";


const RightFooterCard = (props) => {

    let domainType = props.domainType;
    let { isOwner, isEnable } = props.product;

    let rightFooterCard;

    if (domainType === SD_FO) {
        rightFooterCard = (
            <FinanceCard product={props.product} domainType={domainType} />
        );
    } else {
        isEnable && (
            rightFooterCard = (
                <DropdownFunctionCard>
                    {(isOwner === true) && (
                        <Fragment>
                            <LButtonCard group="Management" label={ACT_EDIT} onClick={() => alert('It works! Chỉnh sửa')} />
                            <LButtonCard group="Management" label={ACT_DELETE} onClick={() => alert('It works! Xóa')} />
                        </Fragment>
                    )}
                    <LButtonCard group="Management" label={ACT_HIDDEN} onClick={() => alert('It works! Ẩn')} />
                    <LButtonCard group="Management" label={ACT_HIGHLIGHT} onClick={() => alert('It works! Nổi bật')} />
                </DropdownFunctionCard>
            ));
    }

    return (
        <Wrapper>
            {rightFooterCard}
        </Wrapper>
    );
}

RightFooterCard.propTypes = {
    product: PropTypes.object,
    domainType: PropTypes.string,
    onClick: PropTypes.func
};

export default RightFooterCard;

