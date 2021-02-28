import { lighten } from 'polished';
import styled from 'styled-components';
import { Colors } from '../../../../styles/Colors';

export const Container = styled.div`
  /* border: 2px solid red; */
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 420px;
  width: 372px;
  padding-left: 32px;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #788d74;
  background-blend-mode: overlay, normal;
  border-radius: 5px 0px 0px 5px;

  div {
    display: flex;
    flex-direction: column;
    height: 100%;

    h4 {
      font-size: 32px;
      font-style: normal;
      font-weight: 900;
      line-height: 38px;
      letter-spacing: 0px;
      text-align: left;
      margin: 32px 0 11px 0;
    }

    strong {
      width: 192px;
      font-size: 21px;
      font-style: normal;
      font-weight: 700;
      line-height: 29px;
      letter-spacing: 0em;
      text-align: left;
    }

    ul {
      margin-top: 22px;
      margin-left: 20px;
      li:first-child {
        max-width: 200px;
        list-style: disc;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
      }
      li:last-child {
        max-width: 250px;
        list-style: disc;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
      }
    }

    label {
      display: flex;
      align-items: center;
      margin-top: 26px;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;

      input {
        width: 14px;
        height: 14px;
        margin-right: 10px;
      }
      input[type='checkbox']::before {
        content: ' ';
        width: inherit;
        height: inherit;
        position: absolute;
        background-color: ${Colors.greenDark};
        border: 1px solid #fff;
        border-radius: 2px;
      }
      input[type='checkbox']:checked::after {
        content: ' ';
        width: 0.2rem;
        height: 0.5rem;
        margin-left: 0.3rem;
        border-color: #fff;
        border-style: solid;
        border-width: 0 3px 3px 0;
        position: absolute;
        transform: rotate(45deg);
      }
    }
  }

  footer {
    /* border: 2px solid blue; */
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 40px;

    button {
      background: transparent;
      padding: 10px 15px;
      margin-right: 54px;
      border: 1px solid #ffffff;
      box-sizing: border-box;
      border-radius: 3px;
      color: #ffffff;
      transition: all 0.2s;

      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;

      :hover {
        background-color: ${lighten(0.1, Colors.greenDark)};
      }
    }
  }
`;
