import React from 'react';
import PropTypes from 'prop-types';
import Wrapper, {TitleSection, ReadMore} from './Wrapper';


const HeadGrid = (props) => {
    return (
        <Wrapper>
            <TitleSection>{props.title}</TitleSection>
            {props.readMore!=="" && 
                <ReadMore onClick={props.onClick}>
                    {props.readMore}
                </ReadMore>
            }
        </Wrapper>
    );
}

HeadGrid.propTypes = {
    title: PropTypes.string,
    readMore: PropTypes.string,
    onClick: PropTypes.func
};

export default HeadGrid;