import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Wrapper, { TitleSection, WrapperItem, Item, RoleName, Name} from './Wrapper';
import * as _ from "lodash";
import DropdownCustom from "globalComponents/DropdownCustom";


const convertString= (items)=>{
    let str="";
    items.forEach((element,index) => {
          str=str+element.name+", "
    });
    return str.substring(0, str.length-2);
}

const CooperationUnit = (props) => {
    let col = props.col || 4;
    let result = _.chain(props.items)
    .groupBy('role_name')
    .map((role_name, name) => ({data: role_name, name }))
    .value();
    let countBorder = result.length - ((result.length - col) % col);

    return (
        <Wrapper>
            <TitleSection>{_.get(props,'title')}</TitleSection>
                <WrapperItem>
                {
                    _.map(result, function(item,index){
                        return(
                            <Item borderBottom={index < countBorder} col={col}>
                                <RoleName>{_.get(item.data[0],'role_name')}</RoleName>
                                <Name>{
                                    item.data.length===1 ? _.get(item.data[0],'name'): convertString(item.data)
                                }
                                </Name>
                            </Item>
                        )
                    })
                }
                </WrapperItem>
        </Wrapper>
    );
}

CooperationUnit.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array,
};

export default CooperationUnit;