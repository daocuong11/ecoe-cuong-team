import styled from 'styled-components';
import iconClear from '../../../../../images/icons/clear-Item-icon.svg';

const Wrapper = styled.div`
  
`;

const ItemSearch = styled.div`
  display: inline-block;
  background: #e1f3f4;
  border-radius: 30px;
  padding: 5px 15px;
  margin-right: 10px;
  margin-bottom: 10px;

  &:last-child {
      margin-right: 0;
  }
`;

const Label = styled.div`
  display: inline-block;
  text-transform: capitalize;
  font-size: 1.4rem;
  color: ${props => props.theme.textColor.primaryBlue};
  padding-right: 10px;
`;

const ClearItemSearch = styled.div`
  display: inline-block;
  width: 12px;
  height: 12px;
  background: url(${iconClear}) center no-repeat;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    filter: grayscale(100%);
  }
`;

const Input = styled.input`
  position: absolute;
  opacity: 1;
  cursor: pointer;
  height: 10px;
  width: 10px;
  &:checked {
    color: red;
  }
`;

const ItemSearchChild = styled.div`
  display: block;
  position: relative;
  cursor: pointer;

  ${Input}:hover & {
    background-color: #f00;
  }

`;

const InputCheckboxStyle = styled.span`
  position: absolute;
  top: 0;
  left: -30px;
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: 2px solid #00837b;

`;

export { 
  Wrapper as default, 
  ItemSearch, 
  Label, 
  ClearItemSearch, 
  ItemSearchChild,
  Input,
  InputCheckboxStyle,

};