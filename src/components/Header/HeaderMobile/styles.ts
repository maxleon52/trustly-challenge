import styled from 'styled-components';

interface ContainerProps {
  buttonVisible: string;
}

export const Container = styled.div<ContainerProps>`
  /* border: 2px solid red; */
  display: none;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 100%;
  height: 87px;

  > div {
    /* border: 2px solid blue; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1232px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 34px;
      width: 115px;
      background: rgba(0, 0, 0, 0.05);
      border-radius: 17.4025px;

      svg {
        margin-right: 8.7px;
      }
    }

    h1 {
      /* width: 113.12px; */
      height: 31.36px;
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 26.1038px;
      line-height: 30px;
      text-align: center;
      margin-right: 50px;
    }
  }

  @media (max-width: 700px) {
    display: flex;
    padding: 0 10px;

    > div {
      img {
        width: 29px;
        height: 29px;
      }

      a {
        visibility: ${({ buttonVisible }) => buttonVisible === '/' && 'hidden'};

        button {
          width: 92px;
          height: 28px;
          font-size: 18px;

          svg {
            width: 18px;
            height: 18px;
          }
        }
      }
    }
  }
`;

export const Separator = styled.div`
  /* border: 2px solid blue; */
  height: 34px;
  width: 115px;
  background: transparent;

  @media (min-width: 1px) and (max-width: 700px) {
    display: none;
  }
`;
