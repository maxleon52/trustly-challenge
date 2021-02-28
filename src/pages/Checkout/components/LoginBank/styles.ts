import styled from 'styled-components';
import { Colors } from '../../../../styles/Colors';

export const Container = styled.div`
  color: #000;
  margin-top: 45px;
  header {
    /* border: 2px solid red; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-family: 'Share Tech', sans-serif;

    h4 {
      font-size: 32px;
      margin-right: 5px;
    }

    img {
      width: 31px;
      height: 31px;
      background: #dedede;
    }
  }

  form {
    /* border: 2px solid; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .container {
      /* border: 2px solid red; */
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }

    .material-textfield {
      /* border: 2px solid; */
      position: relative;
      width: 100%;
    }

    label {
      position: absolute;
      font-size: 14px;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background-color: white;
      color: gray;
      padding: 0 0.3rem;
      margin: 0 0.5rem;
      transition: 0.1s ease-out;
      transform-origin: left top;
      pointer-events: none;
    }
    input {
      width: 100%;
      font-size: 16px;
      outline: none;
      border: 1px solid gray;
      border-radius: 5px;
      padding: 10px;
      color: gray;
      transition: 0.1s ease-out;
    }
    input:focus {
      border-color: ${Colors.textLight};
    }
    input:focus + label {
      color: ${Colors.textLight};
      top: 0;
      transform: translateY(-50%) scale(0.9);
    }
    input:not(:placeholder-shown) + label {
      top: 0;
      transform: translateY(-50%) scale(0.9);
    }

    p {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      margin-top: 25px;
      margin-left: 20px;
      color: #7c7c7c;

      span {
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        margin-left: 5px;
        color: #0078cd;
        text-decoration: underline;
      }
    }
  }
`;
