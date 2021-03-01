import styled from 'styled-components';

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
    margin-top: 16px;

    label {
      display: flex;
      align-items: center;
      justify-content: baseline;
      width: 100%;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: #383535;

      input {
        margin-right: 10px;
        width: 15px;
        height: 15px;
      }
    }
    label + label {
      margin-top: 7px;
    }

    > p {
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

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 20px;
      height: 121px;
      width: 315px;
      background: #f4f4f4;
      padding: 10px;

      P {
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;
        color: #7c7c7c;
      }
    }

    span {
      margin-top: 8px;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: #7c7c7c;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
