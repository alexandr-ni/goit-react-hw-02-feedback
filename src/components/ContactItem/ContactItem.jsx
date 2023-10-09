import { Item, Btn } from './ContactItem.styled';
import { FiUser } from 'react-icons/fi';

export const ContactItem = ({ name, number, id, onDelete }) => {
  return (
    <Item>
      <FiUser /> {name}: {number} <Btn onClick={() => onDelete(id)}>Delete</Btn>
    </Item>
  );
};
