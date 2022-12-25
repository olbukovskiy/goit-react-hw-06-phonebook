import ContactList from '../ContactList';
import AddContact from '../AddContact';
import Filter from '../Filter';

import css from './App.module.css';

export function App() {
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
