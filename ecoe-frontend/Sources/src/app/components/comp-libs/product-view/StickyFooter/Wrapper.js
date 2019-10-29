import styled from 'styled-components';
import { ContentSection } from '../Wrapper';


const Wrapper = styled.div`
    background: #fff;
    box-shadow: 0 0 30px #ccc;
    width: 100%;
    position: ${props=>props.fixed ? "fixed" : "unset"};
    left: 0;
    bottom: 0;
    z-index: 998;

    @media (max-width: 1024px) {
        margin: 0;
        padding: 0;
    }
`;

const ContainerBoder = styled.div`
    max-width: 1366px;
    height: 170px;
    margin: auto;
`;

const Container = styled.div`
    height: 100%;
    margin: 0 105px;
    padding: 25px 0;
`;

const TitleProject = styled.div`
    font-size: ${props => props.theme.fontSize.projectFooter};
    font-weight: ${props => props.theme.fontWeight.bold};
    color: ${props => props.theme.textColor.primaryBlue};
    text-transform: capitalize;
    line-height: 1;
    padding-top: 10px;
`;

const AddressProject = styled.div`
    font-size: ${props => props.theme.fontSize.normal};
    font-weight: ${props => props.theme.fontWeight.regular};
    color: ${props => props.theme.textColor.primaryBlue};
    text-transform: capitalize;
    padding: 10px 0;
`;

const Line = styled.div`
    display: flex;
`;

const Item = styled(ContentSection)`
    padding-top: ${props=>props.center && "10px"};
    display: ${props=>props.center && "flex"};
    justify-content: ${props=>props.center && "center"};

    color: ${props=>props.noted && "#b9c0cc"};
    /* align-items: ${props=>props.center && "center"}; */
`;



export { Wrapper as default, ContainerBoder, Container, TitleProject, AddressProject, Line, Item }