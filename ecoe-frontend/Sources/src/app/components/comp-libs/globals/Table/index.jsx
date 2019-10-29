import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../../../../constants/theme';
import Wrapper from './Wrapper';

const TableStyle = styled.div`
    display: block;
    background: #fff;  
    width: 100%;
`;

const RowTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 100%;
  height: 45px;
  border-bottom: #efefef 1px solid;
`;

const ColLeft = styled.div`
  display: inline-block;
  width: 50%;
  text-align: left;
  color: ${props => theme.textColor.grey};
`;

const ColRight = styled.div`
  display: inline-block;
  width: 50%;
  text-align: right;
  font-weight: ${props => theme.fontWeight.extraBold};
  color: ${props => theme.textColor.lighBlack};
`;

const Table = (props) => {
  return (
    <Wrapper size={props.size}>
      <TableStyle>
        {
          props.list.map((item) => 
            <RowTable key={item.id}>
              <ColLeft>{item.name}</ColLeft>
              <ColRight>{item.infor}</ColRight>
            </RowTable>
          )
        }
      </TableStyle>
    </Wrapper>
  );
}

Table.propTypes = {
  size: PropTypes.number,
  list: PropTypes.array,
};

export default Table;