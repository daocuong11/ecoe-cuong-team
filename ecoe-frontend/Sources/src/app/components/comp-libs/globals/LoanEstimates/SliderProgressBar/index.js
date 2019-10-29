import React, { Component, Fragment } from 'react'
import { Slider, Rail, Handles, Tracks } from 'react-compound-slider'
import { SliderRail, Handle, Track } from './components' // example render components - source below
import Wrapper, {LabelNumber} from "./Wrapper";
import * as _ from "lodash";
import PropTypes from 'prop-types';
import {numberFormat} from "globalUtils/format";

const sliderStyle = {
  position: 'relative',
  width: '100%',
  touchAction: 'none',
}

class SliderProgressBar extends Component {
  constructor(props){
    super(props);
    let defaultValues = this.props.defaultValues && this.props.defaultValues.length ? props.defaultValues: [0];
    this.state = {
      values: defaultValues.slice(),
      update: defaultValues.slice()
    }
    this.props.onUpdate && this.props.onUpdate(defaultValues.slice());
  }
  

  onUpdate = update => {
    this.setState({ update })
    this.props.onUpdate && this.props.onUpdate(update);
  }

  onChange = values => {
    this.setState({ values })
    this.props.onChange && this.props.onChange(values);
  }

  render() {
    const {
      state: { values, update },
    } = this

    return (
      <Wrapper>
         <LabelNumber>{numberFormat(update)}</LabelNumber>
        <Slider
          mode={1}
          step={this.props.step? _.get(this.props,'step'): 1}
          domain={_.get(this.props,'domain')}
          rootStyle={sliderStyle}
          onUpdate={this.onUpdate}
          onChange={this.onChange}
          values={values}
        >
          <Rail>
            {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <Fragment>
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={_.get(this.props,'domain')}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </Fragment>
            )}
          </Handles>
          <Tracks right={false}>
            {({ tracks, getTrackProps }) => (
              <Fragment>
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </Fragment>
            )}
          </Tracks>
        </Slider>
      </Wrapper>
    )
  }
}
SliderProgressBar.propTypes = {
  defaultValues: PropTypes.array,
  domain: PropTypes.array
};

export default SliderProgressBar