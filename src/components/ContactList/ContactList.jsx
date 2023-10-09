import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};
