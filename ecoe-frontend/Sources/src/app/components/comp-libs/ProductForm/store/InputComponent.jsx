import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import {withStore} from './store';

class InputComponent extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired
    };

    CurrencyFormat(number)
    {   
        number = _.split(number,'.');
        number = _.join(number,'');
        let decimalplaces = 0;
        let thousandseparater = ".";
        number = parseFloat(number);
        let sign = number < 0 ? "-" : "";
        let formatted = new String(number.toFixed(decimalplaces));
        let integer = "";
        let fraction = "";
        let strnumber = new String(formatted);
    
        integer = strnumber; 
        if( integer ) { integer = String(Math.abs(integer)); }
        let temparray = new Array();
        while( integer.length > 3 )
        {
            temparray.unshift(integer.substr(-3));
            integer = integer.substr(0,integer.length-3);
        }
        temparray.unshift(integer);
        integer = temparray.join(thousandseparater);
        return sign + integer;// + fraction;
    }

    DateFormat(input) {
        input = _.split(input, '/');
        input = _.join(input, '');
        let date = "";
        let result = input;
        if (input.length === 4) {
            date = _.chunk(input, 2);
            result = _.join(date[0], '') + '/' + _.join(date[1], '')
        }

        if (input.length === 8) {
            date = _.chunk(input, 2);
            result = _.join(date[0], '') + '/' + _.join(date[1], '') + '/' + _.join(date[2], '') + _.join(date[3], '');
        }
        return result;
    }


    onChange = (e) => {
        e.preventDefault();
        if (this.props.type === 'currency') {
            if (e.target.value) {
                e.target.value = this.CurrencyFormat(e.target.value);
            }
        } else if(this.props.type === 'date') {
            e.target.value = this.DateFormat(e.target.value);
        }
    };

    getValue = (child) => {
        let name = _.get(child, 'props.name');
        let store = _.get(this.props, 'store');
        
    }

    render() {
        return (
            <Fragment>
                {
                    React.Children.map(this.props.children, child =>
                        React.cloneElement(child, {
                            onChange: this.onChange
                        })
                    )
                }
            </Fragment>
        )
    }
}

export default withStore(InputComponent);