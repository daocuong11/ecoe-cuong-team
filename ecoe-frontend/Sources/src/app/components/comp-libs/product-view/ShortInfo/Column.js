import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { TitleSection, Item, } from './Wrapper';
import ShowInfo from '../ShowInfo';

const Column = (props) => {
    let project = props.project;
    let col = props.two===2 ? 6 : 12;

    return (
        <div>
            <TitleSection>{props.title}</TitleSection>
            {project.map((item) => (
                <Item column={col} key={item.key} hard noPadding>
                    <ShowInfo label={item.name} text={item.value} />
                </Item>
            ))}
        </div>
    );
}

Column.propTypes = {
    title: PropTypes.string,
    project: PropTypes.array,
    two: PropTypes.number
};

export default Column;