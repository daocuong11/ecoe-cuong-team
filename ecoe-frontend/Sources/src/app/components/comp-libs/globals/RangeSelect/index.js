import React, { Component } from "react";
import PropTypes from 'prop-types';
import Wrapper, { UnitType } from './Wrapper'
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { SliderRail, Handle, Track, Tick } from "./components";

import { view, trbl, dims } from "./constants";
import Surface from "./Surface";

const sliderProps = {
    width: dims[0],
    height: dims[1],
    fill: "none",
    opacity: 0.5,
    // stroke: "red"
};

class RangeSelect extends Component {
    constructor(props) {
        super(props);
        let ranges;
        if (this.props.defaultValues !== undefined && this.props.defaultValues.length === 2) {
            ranges = this.props.defaultValues;
        }

        if (
            this.props !== undefined &&
            this.props.data !== null &&
            this.props.data !== undefined
        ) {
            ranges = this.props.data.getSearchCritical(this.props.type);
        }
        this.state = {
            rangeSelected: [ranges.min, ranges.max],
            isSelected: false,
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(vals) {
        if (
            this.props !== undefined &&
            this.props.data !== null &&
            this.props.data !== undefined
        ) {
            this.props.data.updateSearchCritical(this.props.type, {
                min: vals[0],
                max: vals[1],
                unit: this.props.unit
            }, true);
        }
        this.props.onChange !== undefined && this.props.onChange({
            selectMin: vals[0],
            selectMax: vals[1]
        });
    }


    render() {
        let { filterMobile, domain, step, hideTick } = this.props;

        return (
            <Wrapper>
                <Surface view={view} trbl={trbl}>
                    <Slider
                        mode={1}
                        step={step}
                        flatten
                        domain={domain}
                        component="rect"
                        onChange={this.onChange}
                        rootProps={sliderProps}
                        values={this.state.rangeSelected}
                    >
                        <Rail>
                            {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
                        </Rail>
                        <Ticks values={this.props.valueTicks}>
                            {({ ticks, getHandleProps }) => (
                                <g transform={`translate(0,${dims[1]})`}>
                                    {ticks.map((tick, index) => (
                                        <Tick key={tick.id} tick={tick} index={index} hideTick={hideTick} lastValue={ticks.length - 1 === index} />
                                    ))}
                                </g>
                            )}
                        </Ticks>
                        <Tracks left={false} right={false}>
                            {({ tracks, getTrackProps }) => (
                                <g transform={`translate(0,${dims[1] / 2})`}>
                                    {tracks.map(({ id, source, target }) => (
                                        <Track
                                            key={id}
                                            source={source}
                                            target={target}
                                            getTrackProps={getTrackProps}
                                        />
                                    ))}
                                </g>
                            )}
                        </Tracks>
                        <Handles>
                            {({ handles, getHandleProps }) => (
                                <g transform={`translate(0,${dims[1] / 2})`}>
                                    {
                                        handles.map(handle => (
                                            <Handle
                                                key={handle.id}
                                                handle={handle}
                                                domain={domain}
                                                getHandleProps={getHandleProps}
                                            />
                                        ))}
                                </g>
                            )}
                        </Handles>
                    </Slider>
                </Surface>

                {
                    !filterMobile && (
                        <UnitType>
                            Đơn vị: {this.props.unit + (this.props.currency ? ' ' + this.props.currency : '')}
                        </UnitType>
                )}
            </Wrapper>
        );
    }
}

RangeSelect.propTypes = {
    unit: PropTypes.string,
    domain: PropTypes.array,
    valueTicks: PropTypes.array,
};

export default RangeSelect;
