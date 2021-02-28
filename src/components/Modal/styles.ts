import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import { shade } from 'polished';
import { Colors } from '../../styles/Colors';

interface IOverlayProps {
  visible: boolean;
}

interface ContainerProps {
  containerStyle?: React.CSSProperties;
}

export const Overlay = styled.div<IOverlayProps>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 20px;
  background: #00000090;
  color: #fff;
  opacity: 0;
  visibility: hidden;
  transition: 0.2s ease-in 0.2s;
  cursor: pointer;
  z-index: 9999;

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      visibility: visible;
      transition: 0.3s;

      > div {
        opacity: 1;
        transform: translateY(0);
        transition: 0.3s ease-out 0.2s;
      }
    `};
`;

export const Container = styled(animated.div)<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 355px;
  height: 585px;
  /* padding: 10px 15px; */
  background: #fff;
  box-shadow: 0 5px 30px #00000090;
  opacity: 0;
  border-radius: 5px;
  transform: translateY(20px);
  transition: 0.2s ease-in;

  text-align: left;
  cursor: default;
  -webkit-overflow-scrolling: touch;

  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    margin: 10px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: ${shade(0.1, Colors.grey)};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${shade(0.2, Colors.grey)};
  }

  header {
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 8px;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      h4 {
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;
        color: #52565f;
      }
    }
    span {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: center;
      color: ${Colors.textLight};
    }
  }
  section {
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
    flex: 1;
    padding: 5px 15px;
  }
  footer {
    /* border: 2px solid green; */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;

    img {
      width: 15px;
      height: 15px;
    }
    p {
      font-size: 12px;
      font-style: normal;
      font-weight: 300;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      color: #52565f;
      margin-left: 6px;

      span {
        color: ${Colors.greenDark};
        margin-right: 16px;
      }
    }
    svg {
      /* margin-left: 16px; */
    }
  }
`;

export const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${Colors.textLight};
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: #ededed;
    color: ${Colors.textLight};
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const BackButton = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${Colors.textLight};
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: #ededed;
    color: ${Colors.textLight};
  }

  &:disabled {
    opacity: 0.5;
  }
`;
