import React from 'react';
import DropdownFunctionCard from '../../../../elements/DropdownFunctionCard';
import LButtonCard from '../../Buttons/LButtonCard';
import { ACT_EDIT, ACT_DELETE, ACT_SHOW } from "constants/labelActionForCard";

const ProductActionBar = (props) => {
  return (
    <DropdownFunctionCard>
      <LButtonCard group="Management" label={ACT_EDIT} onClick={() => alert('It works! Chỉnh sửa')} />
      <LButtonCard group="Management" label={ACT_DELETE} onClick={() => alert('It works! Xóa')} />
      <LButtonCard group="Management" label={ACT_SHOW} onClick={() => alert('It works! Hiện')} />
    </DropdownFunctionCard>
  );
}

export default ProductActionBar;

