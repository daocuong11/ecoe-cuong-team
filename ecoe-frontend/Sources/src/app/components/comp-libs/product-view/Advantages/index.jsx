import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Wrapper, { TitleSection, Item, Icon, Text } from './Wrapper';

import {getUrlImage} from "globalUtils/getIcon";

// const ShowIcon = (advIcon) => {
//     switch (advIcon) {
//         case "link360".toUpperCase():
//             return <Interior width={50} height={50} fill="#28466A" />
//             break;
//         default: 
//             return <DefaultToiThich width={50} height={50} fill="#28466A" />
//     }
// }

const Advantages = (props) => {
    let advantages = props.advantages;
    return (
        <Fragment>
            <TitleSection>{props.title}</TitleSection>
            <div>
            {
                advantages.map((item) => (
                    <Item key={item.id}>
                        <Icon>
                            <img 
                                src={getUrlImage(item.icon ? item.icon : "default-toi-thich" ,'advantages')} 
                                alt={item.name}
                            />
                        </Icon>
                        <Text>
                            <p>{item.name}</p>
                        </Text>
                    </Item>
                ))
            }
            </div>
        </Fragment>
    );
}

Advantages.propTypes = {
    title: PropTypes.string,
    advantages: PropTypes.object,
};

export default Advantages;