import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  color: #000;
  padding: 10px 0px 0px 0px;

  ul {
    display: flex;
    flex-direction: column;
    p {
      font-size: 10px;
      font-style: normal;
      font-weight: 700;
      line-height: 14px;
      letter-spacing: 0em;
      text-align: left;
      color: #a7a7a7;
    }

    li {
      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 8px 0px;
        transition: all 0.2s;

        :hover {
          cursor: pointer;
        }

        img {
          width: 31px;
          height: 31px;
          border-radius: 5px;
        }

        > div {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: left;
          padding-left: 20px;

          span {
            font-size: 14px;
            font-family: Open Sans;
            font-style: normal;
            font-weight: 400;
            line-height: 17px;
            letter-spacing: 0em;
            text-align: left;
          }

          p {
            font-size: 11px;
            font-style: normal;
            font-weight: 400;
            line-height: 13px;
            letter-spacing: 0em;
            text-align: left;
          }
        }
      }
    }
    li + li {
      > div {
        border-top: 1px solid #eaeaea;
      }
    }
  }
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-self: baseline;
  width: 100%;
  border-radius: 5px;
  padding: 8px 8px;
  background: #f5f5f5;

  input {
    border: none;
    background: transparent;
    flex: 1;
    margin-left: 8px;
    color: #626262;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;

    ::placeholder {
      color: #a5a5a5;
    }
  }
  span {
    width: 91px;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #8a8a8a;
  }
`;
