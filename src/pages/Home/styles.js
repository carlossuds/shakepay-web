import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-height: 80vh;
  flex-direction: column;

  strong {
    font-weight: 700;
  }

  :first-child {
    display: flex;
    flex-direction: row;
    padding: 40px;
  }
`;

export const Aside = styled.div`
  strong,
  span {
    font-size: 18px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  flex-direction: column;

  h1 {
    font-weight: 700;
    font-size: 40px;
  }
`;

export const Transaction = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid
    ${props => (props.direction === 'credit' ? '#056644' : '#9f0101')};
  background-color: ${props =>
    props.direction === 'credit' ? '#056644' : '#9f0101'};
  width: 30%;
  height: 150px;
  border-radius: 4px;
  margin-bottom: 30px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  align-self: center;

  span {
    color: #fff;
    font-size: 16px;
  }
  strong {
    color: #fff;
    font-size: 20px;
  }
`;
