import React,{Fragment} from "react";

import Overview from './Overview';
import TypeDetail from './TypeDetail';
import ContentItem from './ContentItem';

export const ContentTab = (props) => {
    return (
        <Fragment>
            <ContentItem title="Tổng quan">
                <Overview productUnit={props.productUnit} />
            </ContentItem>
            <ContentItem title="Chi tiết loại hình">
                <TypeDetail projectSummaries={props.productUnit.projectSummaries} type={props.productUnit.type} />
            </ContentItem>
        </Fragment>
    );
}