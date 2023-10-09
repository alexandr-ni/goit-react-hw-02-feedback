import styled from 'styled-components';

export const Item = styled.li`
  width: 300px;
  padding: 5px;

  display: flex;
  justify-content: space-between;

  :active {
    background-color: red;
  }
`;

export const Btn = styled.button`
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
`;
