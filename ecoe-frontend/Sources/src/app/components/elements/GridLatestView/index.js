import styled from 'styled-components';
import PropTypes from 'prop-types';

const GridLatestView = styled.div.attrs(({ type }) => ({
  widthCard: "calc((100% - " + (type - 1) * 30 + "px)/" + type + ")" || "calc(100% - 30px)",
  truLeft: type + "n + 1",
  truRight: type + "n + " + type,
}))`
  display: inline-block;
  width: 100%;
  height: 100%;

  &:nth-child(${props => props.truLeft}) {
    /* margin-left: 0; */
  }
  &:nth-child(${props => props.truRight}) {
    /* margin-right: 0; */
  }

  @media (max-width: 640px) {
    width: 100%;
    margin: 20px 0;
  }
`;

GridLatestView.propTypes = {
  type: PropTypes.number,
};

export default GridLatestView;