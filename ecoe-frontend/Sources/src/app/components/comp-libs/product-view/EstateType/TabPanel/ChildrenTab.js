import React from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs';
import { TitleTab } from './Wrapper';
import { ContentTab } from "./ContentTab";

const ChildrenTab = (props) => {
    let projectUnits = props.projectUnits;

    return (
        <Tabs level={2}>
            {projectUnits.map((item) => (
                <TitleTab key={item.id} level={2} label={item.projectUnitNm}>
                    <ContentTab productUnit={item}></ContentTab>
                </TitleTab>
            ))}
        </Tabs>
    );
}

ChildrenTab.propTypes = {
    title: PropTypes.string,
    product: PropTypes.object,
};

export default ChildrenTab;