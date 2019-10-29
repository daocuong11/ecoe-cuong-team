import React, { Fragment } from 'react';
import {Form, Input, ButtonBoder, ButtonSearch} from './Wrapper';

const SearchContent = (props) => {
    return (
        <Fragment>
            <Form action="" id="searchContent">
                <Input type="text" name="search" placeholder={props.placeholder} autocomplete="on" />
                <ButtonBoder>
                    <ButtonSearch onClick={props.onClick} />
                </ButtonBoder>
            </Form>
        </Fragment>
    );
}

export default SearchContent;