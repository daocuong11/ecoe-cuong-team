import styled from 'styled-components';
import { ContentSection } from '../Wrapper';

const Wrapper = styled.div`
    display: flex;
    width: 100%;

    > div {
        display: inline-block;
        width: calc((100% - 60px)/3);
        padding: 0 15px;
        box-sizing: content-box;

        &:first-child { padding-left: 0; }
        &:last-child { padding-right: 0; }

        @media (max-width: 700px) {
            width: 100%;
            padding: 30px 0px;
        }
    }   

    @media (max-width: 700px) {
        display: block;
    }
`;

const TitleSection = styled.div`
    font-size: ${props=>props.theme.fontSize.sectionTitle};
    color: ${props=>props.theme.textColor.primaryBlue};
    font-weight: ${props=>props.theme.fontWeight.bold};
    padding: 0px 0 30px;
    border-bottom: 1px dashed #b9c0cc;
`;

const Item = styled(ContentSection)``;


export { Wrapper as default, TitleSection, Item,  };