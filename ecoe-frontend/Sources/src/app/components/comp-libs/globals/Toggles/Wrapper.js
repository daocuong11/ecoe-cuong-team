import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const Toggle = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  transform: translate3d(0, 0, 0);
  background-color: ${props => props.bgClear};
  height: ${props => (props.width / 2)}px;
  width: ${props => props.width}px;
  border-radius: ${props => props.width / 4}px;
  padding: ${props => props.padding}px;
  border: 1px solid ${props => props.toggled ?
    props.bgToggled :
    props.borderColor
  };
`;

const ToggleBall = styled.div`
  z-index: 2;
  border-radius: 50%;
  box-shadow: 0px 0px 3px rgba(0,0,0,0.2);
  transition: transform 0.3s cubic-bezier(1,.19,.15,.7);
  transition-delay: 0.1s;
  will-change: transform;
  background-color: ${props => props.ballColor};
  border: 1px solid ${props => props.borderColor};
  height: ${props => (props.width / 2) - (props.padding * 2)}px;
  width: ${props => (props.width / 2) - (props.padding * 2)}px;
  transform: ${props => props.toggled ?
    `translateX(${props.width - (props.width / 2)}px)` :
    'translateX(0px)'
  };
  &:active {
    background-color: ${props => props.ballColorActive};
  }
`;

const RippleBg = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: radial-gradient(
    circle, ${props => props.bgToggled} 10%, transparent 10.01%
  );
  background-repeat: no-repeat;
  background-position: 50%;
  pointer-events: none;
  transition: transform 0.5s, opacity 0.3s ease;
  transform: ${props => props.visible ? 'scale(10, 10)' : 'scale(0, 0)'};
  opacity: ${props => props.visible ? 1 : 0};
  position: absolute;
  z-index: 1;
`;

const InnerLabel = styled.span`
  font-size: ${props => props.size}px;
  color: ${props => props.color};
  position: absolute;
  z-index: 2;
  ${props => props.left && 'left: 10px;'};
  ${props => props.right && 'right: 10px;'};
`;

const OuterLabel = styled.span`
  font-size: ${props => props.size}px;
  color: ${props => props.color};
  position: absolute;
  top: 0px;
  transform: translateY(-110%);
  width: 100%;
  text-align: center;
`;

export { Wrapper as default, Toggle, ToggleBall, RippleBg, InnerLabel, OuterLabel }