import React from 'react';
import Wrapper, { StyledOption, Sticked, PopupStyle, ButtonDropdown, DropdownContainer } from './Wrapper';
import * as _ from "lodash";
import PropTypes from 'prop-types';


class DropdownCustom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listStatus: props.items,
            title: '',
            open: false,
            indexOfSelected: 0
        };
        this.blurHandler = this.blurHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);

    }
    blurHandler(e) {
        // this.setState({
        //     open: false
        // });
    }
    clickHandler(e) {
        this.setState({
            open: true
        })
    }
    componentDidMount() {
        this.updateOption(_.first(this.props.items).key);
    }

    updateOption(key) {
        let newList = this.state.listStatus;

        let indexOfSelected = _.findIndex(newList, { key: key })

        this.setState({
            title: newList[indexOfSelected].name,
            listStatus: newList,
            open: false,
            indexOfSelected: indexOfSelected
        }, () => {
            this.props.onChange && this.props.onChange(newList[indexOfSelected].value);
        });
    }

    render() {
        return (

            <Wrapper onClick={this.clickHandler} onBlur={this.blurHandler} tabIndex={0}>
                <PopupStyle trigger={
                    <ButtonDropdown type={this.props.type} borderBottom={this.props.borderBottom}>
                        {this.state.title}
                    </ButtonDropdown>
                }
                    maxWidth={this.props.maxWidth}
                    position={this.props.position ? this.props.position : ["bottom right", "bottom left", "top left", "top right", "top center",]}
                    open={this.state.open}
                // arrowStyle={{ display: 'none' }}
                >
                    <DropdownContainer padding={this.props.padding}>
                        {
                            this.state.listStatus.map((item, index) =>
                                <StyledOption
                                    value={item.value}
                                    key={item.key}
                                    onClick={() => this.updateOption(item.key)
                                    }>
                                    {(index === this.state.indexOfSelected && <Sticked />)}
                                    {item.name}
                                </StyledOption>
                            )
                        }
                    </DropdownContainer>
                </PopupStyle>
            </Wrapper>
        );
    }
}

DropdownCustom.propTypes = {
    onChange: PropTypes.func
};

export default DropdownCustom;