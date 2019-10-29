import styled from 'styled-components';

const Wrapper = styled.div``;

const WrapperBorderCard = styled.div`
  width: 100%;
  height: 100%;
  background: ${props=>props.couldAddition ? props.theme.background.lightYellow : props.theme.background.white};
  box-shadow: 0 1px 10px #eee;
`;

const InfoCard = styled.div`
    display: block;
    padding: 25px 15px 0;

    @media (max-width: 640px) {
        display: block;
        margin: 0;
        padding: 0;
    }
`;

const ListView = styled.div`
    display: flex;
    align-items: center;
    box-shadow: 0 1px 5px #eee;
    position: relative;
`;

const Left = styled.div`
    display: inline-block;
    width: calc(30% - 15px);
    padding-right: 15px;

    @media (max-width: 700px) {
        width: 100%;
    }
`;

const Right = styled.div`
    display: inline-block;
    width: calc(70% - 15px);
    
    @media (max-width: 700px) {
        width: 100%;
    }
`;

const FrameFooter = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const DrapCard = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
`;

const DrapCardContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DropdownBorder = styled.div`
  background: #fff;
`;

export { Wrapper as default, WrapperBorderCard, 
  InfoCard, ListView, Left, Right, DrapCard, DrapCardContainer, FrameFooter, DropdownBorder };