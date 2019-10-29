import styled, {css} from 'styled-components';

export const CheckMark = styled('span')`
     position: absolute;
     top: 0;
     left: 0;
     height: 20px;
     width: 20px;
     background-color: #fff;
     border: 2px solid #ccc;
     border-radius: 50%;
     
     &:after {
        content: "";
        position: absolute;
        display: none;
        left: 4px;
        top: 4px;
        width: 8px;
        height: 8px;
        background: #fff;
        border-radius: 50%;
     }
     
     & + * {
     	margin-left: 25px;
     }
`;

export const RadioButton = styled('label')`
    height: 20px;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    position: relative;
    margin: 0;
    cursor: pointer;
    
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
   
    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        
        &:checked ~ ${CheckMark} {
            background-color: #00837B;
            border-color: #00837B;
        }
        
        &:checked ~ ${CheckMark}:after {
            display: block;
        }
    }
    
    &:hover {
        ${CheckMark} {
            background-color: #ccc;
        }
    }
    
    & + & {
    	margin-left: 25px;
    }
`;