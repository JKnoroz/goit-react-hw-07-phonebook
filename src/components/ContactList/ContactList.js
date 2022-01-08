import React from 'react';
import { useSelector } from 'react-redux';
import { getFilter, getVisibleContacts } from '../../redux/selectors';

import { useDeleteContactMutation } from '../../redux/phonebook';

import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ contacts }) {
  const filter = useSelector(getFilter);
  const visibleContacts = useSelector(state =>
    getVisibleContacts(state, contacts),
  );
  // const visibleContacts = contacts.filter(contact => {
  //   return contact.name.toLowerCase().includes(filter.toLowerCase());
  // });

  const [deleteContact] = useDeleteContactMutation();

  return (
    <ul className={s.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button className={s.deleteButton} onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
