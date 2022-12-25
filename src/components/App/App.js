// import { useState, useEffect } from 'react';

import ContactList from '../ContactList';
import AddContact from '../AddContact';
import Filter from '../Filter';

import css from './App.module.css';

export function App() {
  // const [contacts, setContacts] = useState(
  //   () => [...JSON.parse(localStorage.getItem('contacts'))] ?? initialValues
  // );

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const preparedContacts = JSON.stringify(contacts);
  //   localStorage.setItem('contacts', preparedContacts);
  // }, [contacts]);

  return (
    <div>
      <p className={css.sectionHeading}>Phonebook</p>
      <AddContact />
      <p className={css.sectionHeading}>Contacts</p>
      <Filter />
      <ContactList />
    </div>
  );
}
