import styled from 'styled-components';
import { devices } from "globalUtils/styledUtils"; 

const Wrapper = styled.div`
background: #D3E8ED;
height: 187px;
display: flex;
padding: 10px;
border-radius: 5px;
${devices.sm`
display: block;
height: auto;
`}

`;

const Item = styled.div`
padding-top: 24px;
`;
const LabelTitle = styled.div`
font-size: ${props => props.theme.fontSize.normal};
color: #778FAF;
`;
const LabelMoney= styled.div`
font-size: ${props => props.primary ? props.theme.fontSize.projectTitle: props.theme.fontSize.medium18};
font-weight: ${props => props.theme.fontWeight.bold};
font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
color: ${props => props.color ? props.color: props.theme.textColor.primaryBlue};
`;
const RepaymentSchedule = styled.div`
cursor: pointer;
color: ${props => props.color ? props.color: props.theme.textColor.primaryGreen};
font-weight: ${props => props.theme.fontWeight.bold};
font-size: ${props => props.theme.fontSize.small};
text-decoration: underline;
margin-top:30px;
`;

const WrapperChartJs=styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`;
export { Wrapper as default, LabelTitle,Item,LabelMoney,RepaymentSchedule,WrapperChartJs};