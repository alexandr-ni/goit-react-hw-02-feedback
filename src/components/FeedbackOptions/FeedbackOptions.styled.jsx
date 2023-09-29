import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
`;

export const ListItem = styled.li`
  :active {
    background-color: #6c8ac2;
  }
`;

export const Button = styled.button`
  height: 25px;
  font-weight: bold;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 1px 2px 0px black;
`;
