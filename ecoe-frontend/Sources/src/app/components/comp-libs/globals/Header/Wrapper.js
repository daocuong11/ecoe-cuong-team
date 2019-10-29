import styled from 'styled-components';
//import { SD_BO } from "constants/domainType";

const Wrapper = styled.div`
  /* 
  .attrs(({ domainType, isSearchResultPage }) => ({
  border: isSearchResultPage ? "#fff" : domainType === SD_BO ? "#043158" : "#086F69",
  }))
  display: flex;
  align-items: center; 
  border-bottom: 2px solid ${props => props.border}; */
  padding: 0 30px;
  border-bottom: 2px solid rgba(0, 0, 0, .4);
  
  @media (max-width: 640px) {
    display: block;
    padding: 10px 30px;
  }
`;

const ContentHeader = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: auto;
`;

const LeftHeader = styled.div`
  display: inline-flex;
  align-items: center;
  width: 150px;
  height: 95px;

  @media (max-width: 640px) {
    display: block;
    height: auto;
  }
`;

const RightHeader = styled.div`
  width: calc(100% - 150px);
  height: 95px;
  float: right;
`;

const UserInfo = styled.div`
  text-align: right;
  /* height: 50%; */
  padding-top: 5px;

  @media (min-width: 1024px) {
    height: calc(100% - 40px);
  }
`;

const MainMenuBorder = styled.div`
  text-align: right;
  /* height: 50%; */
  
  @media (min-width: 1024px) {
    height: 40px;
  }
`;

const BorderIcon = styled.div`
  display: inline-block;
  margin-left: 20px;
  margin-right: ${props=>props.paddingRight && "30px" };

  &:first-child {margin-left:0;}

`;

const HeaderButton = styled.div`
  background: ${props => props.theme.background.primaryBlue};
  width: 200px;
  padding: 20px 30px;
  border-radius: 5px;
  color: #fff;
  
  @media (max-width: 640px) {
    width: auto;
  }
`;



export { Wrapper as default, HeaderButton, ContentHeader, LeftHeader, RightHeader, UserInfo, MainMenuBorder, BorderIcon };