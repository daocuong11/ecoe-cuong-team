import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { dims } from "./constants";

// *******************************************************
// RAIL thuoc do dai
// *******************************************************
export function SliderRail({ getRailProps }) {
  const h0 = dims[1] * 0.24; // inner - visible
  const h1 = dims[1] * 0.6; // outer - invisible w/ events

  return (
    <g>
      <rect
        x={0-20}
        y={dims[1] / 2 - h0 / 2}
        width={dims[0]+40}
        height={h0}
        rx={h0 / 2}
        style={{ pointerEvents: "none" }}
        fill="#fff"
        stroke="#bdcce0"
        strokeWidth="1px"
      />
      <rect
        x={0}
        y={dims[1] / 2 - h1 / 2}
        width={dims[0]}
        height={h1}
        rx={h1 / 2}
        style={{ cursor: "pointer" }}
        fill="rgba(0,0,0,0)"
        {...getRailProps()}
      />
    </g>
  );
}

SliderRail.propTypes = {
  getRailProps: PropTypes.func.isRequired
};

// *******************************************************
// HANDLE COMPONENT - dau tron keo chon
// *******************************************************
export function Handle({ handle: { id, percent }, getHandleProps }) {
  const r0 = dims[1] * 0.24;//dims[1] * 0.4; // inner - visible
  const r1 = dims[1] * 0.6; // outer - invisible w/ events

  return (
    <g className="handle">
      <rect
        width={r0}
        height={r0}
        style={{ pointerEvents: "none" }}
        transform={`translate(-${r0 / 2},-${r0 / 2})`}
        x={dims[0] * (percent / 100)}
        rx={r0 / 2}
        fill="#fff"
        stroke="#00837b"
        strokeWidth="3px"
      />
      <rect
        width={r1}
        height={r1}
        transform={`translate(-${r1 / 2},-${r1 / 2})`}
        x={dims[0] * (percent / 100)}
        rx={r1}
        style={{ cursor: "pointer" }}
        fill="rgba(0,0,0,0)"
        {...getHandleProps(id)}
      />
    </g>
  );
}

Handle.propTypes = {
  domain: PropTypes.array.isRequired,
  handle: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  getHandleProps: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

Handle.defaultProps = {
  disabled: false
};

// *******************************************************
// TRACK COMPONENT
// *******************************************************
export function Track({ source, target, getTrackProps }) {
  const x0 = dims[0] * (source.percent / 100);
  const x1 = dims[0] * (target.percent / 100);
  const h0 = dims[1] * 0.24; // inner - visible
  const h1 = dims[1] * 0.6; // outer - invisible w/ events

  return (
    <Fragment>
      <rect x={x0} y={-h0 / 2} width={x1 - x0} height={h0} fill="#00837b" />
      <rect
        x={x0}
        y={-h1 / 2}
        width={x1 - x0}
        height={h1}
        style={{ cursor: "pointer" }}
        fill="rgba(0,0,0,0)"
        {...getTrackProps()}
      />
    </Fragment>
  );
}

Track.propTypes = {
  source: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  target: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  getTrackProps: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

Track.defaultProps = {
  disabled: false
};

// *******************************************************
// TICK COMPONENT
// *******************************************************
export function Tick({ tick, count, format, index, hideTick, lastValue }) {  
  const x = dims[0] * (tick.percent / 100);
  const h = dims[1] * 0.2; // inner - visible
  let heightTickY1= (index%2===0 && hideTick==='even') || (index%2!==0 && hideTick==='odd') ? 32: 25;
  let heightTickY2= (index%2===0 && hideTick==='even') || (index%2!==0 && hideTick==='odd') ? 47: 55;

  return (
    <g transform={`translate(${x},0)`} style={{ pointerEvents: "none" }}>
      <line
        x1={0}
        y1={-h - heightTickY1}
        x2={0}
        y2={0 - heightTickY2}
        strokeWidth="1px"
        stroke="#8da3c1"
      />
      {
        (index%2===0 && hideTick==='even') || (index%2!==0 && hideTick==='odd') ? null:
        <text
        stroke="#0a2240"
        dy="-75px"
        textAnchor="middle"
        fontFamily="Muli, sans-serif"
        fontSize="18px"
      >
        {lastValue ? format(tick.value)+'+': format(tick.value) }
      </text>
    }
    </g>
  );
}

Tick.propTypes = {
  tick: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  format: PropTypes.func.isRequired
};

Tick.defaultProps = {
  format: d => d
};
