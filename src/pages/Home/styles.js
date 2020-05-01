import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  header {
    align-self: flex-start;

    img {
      height: 53px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 933px;
  height: 312px;
  margin-top: 1%;

  header {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  button {
    width: 200px;
    height: 46px;
    border: 2px solid orange;
    border-radius: 4px;
    background: none;
    color: orange;
    font-weight: 500;
  }
`;

export const SelectionDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 35%;
  justify-content: space-between;
`;

export const Option = styled.div`
  display: flex;
  align-self: center;
  flex-direction: row;
  width: 300px;
  margin-right: 20px;

  svg {
    margin-right: 10px;
    align-self: flex-end;
  }

  div {
    display: flex;
    align-self: center;
    flex-direction: column;

    span,
    strong {
      color: #999;
    }

    strong {
      font-size: 25px;
    }
  }

  :hover {
    border-bottom: 2px solid red;
  }
`;

export const Form = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
`;
