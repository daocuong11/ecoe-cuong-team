import React from 'react';
import PropTypes from 'prop-types';
import { HeadlineInfoProjectStyle, Span, SpanNumber } from './Wrapper';

const HeadlineInfoProject = (props) => {
  let {numberOfUnits, date, model} = props.product;

  return (
    <HeadlineInfoProjectStyle>
      <Span>Số căn: <SpanNumber>{numberOfUnits ? numberOfUnits : "-"}</SpanNumber></Span>
      <Span>Hoàn thành: <SpanNumber>{date ? date : "-"}</SpanNumber></Span>
      <Span>Loại hình: <SpanNumber>{model ? model : "-"}</SpanNumber></Span>
    </HeadlineInfoProjectStyle>
  );
}

HeadlineInfoProject.propTypes = {
  product: PropTypes.object,
};

export default HeadlineInfoProject;