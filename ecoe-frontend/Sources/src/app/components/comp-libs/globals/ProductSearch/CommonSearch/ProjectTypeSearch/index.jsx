import React from 'react';

import Wrapper from './Wrapper';
import ProjectTypeButton from './ProjectTypeButton';
import ProjectTypeDropdown from './ProjectTypeDropdown';

const ProjectTypeSearch = (props) => {
    return (
        <Wrapper>
            {(!props.isResultPage && !props.isFreeze) ? ( <ProjectTypeButton {...props} /> ) : (<ProjectTypeDropdown {...props} />)}
        </Wrapper>
    );
}

export default ProjectTypeSearch;