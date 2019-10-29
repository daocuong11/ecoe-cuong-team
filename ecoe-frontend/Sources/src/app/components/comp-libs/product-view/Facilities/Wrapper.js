import styled from 'styled-components';
import icon from "../../../../images/icons/icon-bed.svg"
import { ContentSection } from '../Wrapper';
import { devices } from "globalUtils/styledUtils";
const Wrapper = styled.div``;

const TitleSection = styled.div`
    font-size: ${props => props.theme.fontSize.sectionTitle};
    color: ${props => props.theme.textColor.primaryBlue};
    font-weight: ${props => props.theme.fontWeight.bold};
    padding: 50px 0;
`;

const WrapperItem = styled.div`
    width: 100%;
    padding-top: ${props=>props.paddingTop && "50px"};
`;

const Row = styled.div`
    width: 100%;
    display: flex;
    ${devices.sm`
    display: inline-block;
    `}
    ${devices.md`
    display: inline-block;
    `}
    ${devices.lg`
    display: inline-block;
    `}
`;

const Column = styled.div`
    padding: 35px;
    height: 100%;
    background: #fff;
    box-shadow: 0 0 30px #ccc;
`;

const TitleItem = styled(TitleSection)`
    font-size: ${props => props.theme.fontSize.medium18};
    padding: 0 0 30px;
`;

const Item = styled(ContentSection).attrs(({ column }) => ({
    col: column || 0,
    w: (100 / 12) * column || 100,
}))`
    width: ${props => (props.w && props.margin) ? "calc(50% - 55px)" : props.w + '%'};
    padding: ${props => props.margin ? "15px 0" : "15px 12px"};
    margin: ${props => props.margin && "0 55px"};
    border-bottom: ${props => props.boder && "1px dashed #ccc"};

    @media (min-width: 768px) {
        &:nth-child(${props => props.column === 6 ? "2n+1" : props.column === 3 && "4n+1"}){
            margin-left: 0;
            padding-left: 0;
        };

        &:nth-child(${props => props.column === 6 ? "2n" : props.column === 3 && "4n"}){
            margin-right: 0;
            padding-right: 0;
        }
    }

    @media (max-width: 700px) {
        width: 100%;
        padding: 15px 0;
        margin: 0 0 0 0;
    }
`;

const Title = styled.div`
position: relative;
color: ${props => props.theme.textColor.hotArea2};
font-weight: ${props => props.theme.fontWeight.semiBold};
font-size: ${props => props.theme.fontSize.normal};

&:after{
    content: "";
    display: block;
    background: url('${props => props.icon}') no-repeat;
    width: 23px;
    height: 23px;
    position: absolute;
    right: 0;
    top: 0;
    background-size: 23px 23px;
}
`;

const TitleParent = styled(Title)`
    font-size: ${props => props.theme.fontSize.medium};
    border-bottom: 1px dashed #ccc;
    padding: 55px 0 20px;
    margin-bottom: 20px;

    &:after{
        background-size: 60px 45px;
        width: 60px;
        height: 45px;
        position: absolute;
        left: 0;
        top: 0;

    }
`;

const P = styled.p`
    font-size: ${props => props.theme.fontSize.normal};
    line-height: 2;
    color: #28466a;
`;

export { Wrapper as default, TitleSection, WrapperItem, Row, Column, TitleItem, Item, Title, TitleParent, P };