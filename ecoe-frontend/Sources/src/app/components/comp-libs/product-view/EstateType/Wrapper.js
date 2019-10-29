import styled from 'styled-components';

const Wrapper = styled.div``;

const TitleSection = styled.div`
    font-size: ${props=>props.theme.fontSize.sectionTitle};
    color: ${props=>props.theme.textColor.primaryBlue};
    font-weight: ${props=>props.theme.fontWeight.bold};
    padding: 50px 0;
`;

export { Wrapper as default, TitleSection };