import React, { Component, Fragment } from 'react';
import Card from "../globals/Card";
import * as _ from 'lodash';
import PropTypes from 'prop-types';

import { GridLayout, CheckAllWrap, DropDown } from './Wrapper';
import {withData} from './withData';

import CheckItem from "./CheckItem";
import CheckList from "./CheckList";
import CheckBorder from "../../elements/CheckBox/CheckBorder";
import InfiniteScroll from 'globalComponents/InfiniteScroll';
import LButtonCard from "../globals/Buttons/LButtonCard";


const LIST_MODE = 1;
const GRID_MODE = 2;

class List extends Component {

    static propTypes = {
        mode: PropTypes.oneOf([LIST_MODE, GRID_MODE])
    };

    static defaultProps = {
        mode: GRID_MODE
    };

    constructor(props) {
        super(props);

        this.state = this.initState();
    }

    initState = () => {
        return {};
    };

    checkListChange = (listItem) => {
        console.log(listItem);
    };

    render() {
        let { mode, data } = this.props;

        let columns = mode === LIST_MODE ? 1 : 3;

        let list = data;

        return (
            <CheckList onChange={this.checkListChange}>
                {
                    ({onChange, checkAll, data, isOwner}) => (
                        <InfiniteScroll
                            loadMore={this.props.loadMore}
                            hasMore={true}
                        >
                            <CheckAllWrap hidden={!isOwner}>
                                <CheckBorder onChange={(e) => checkAll(e.target.checked, list, 'id')} checked={_.isEqual(_.size(data), _.size(list))} name="Chọn tất cả"
                                             indeterminate={_.size(data) > 0 && _.size(data) < _.size(list)}/>
                                <DropDown>
                                    <LButtonCard group="Management" label="Chỉnh sửa" onClick={() => alert('It works! Chỉnh sửa')} />
                                    <LButtonCard group="Management" label="Xóa" onClick={() => alert('It works! Xóa')} />
                                    <LButtonCard group="Management" label="Xem" onClick={() => alert('It works! Xem')} />
                                    <LButtonCard group="Management" label="Ẩn" onClick={() => alert('It works! Ẩn')} />
                                    <LButtonCard group="Management" label="Hiện" onClick={() => alert('It works! Hiện')} />
                                    <LButtonCard group="Management" label="Nổi bật" onClick={() => alert('It works! Nổi bật')} />
                                    <LButtonCard group="Management" label="Bỏ nổi bật" onClick={() => alert('It works! Bỏ nổi bật')} />
                                </DropDown>
                            </CheckAllWrap>

                            <GridLayout columns={columns}>
                                {
                                    _.map(list, (item, index) => (
                                        <CheckItem key={index}
                                                   type={_.get({[LIST_MODE]: 'horizontal',[GRID_MODE]: 'vertical' }, mode)}
                                                   id={item.id}
                                                   onChange={onChange}
                                                   checked={_.includes(data, item.id)}
                                                   hidden={!isOwner}
                                        >
                                            <Card key={index} product={item} viewType={mode}/>
                                        </CheckItem>
                                    ))
                                }
                            </GridLayout>
                        </InfiniteScroll>
                    )
                }
            </CheckList>
        );
    }
}

export default List;
