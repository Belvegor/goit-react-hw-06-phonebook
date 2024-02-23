import React from 'react';
import { useContacts, useFilter, useContactsDispatch, addContact, deleteContact, setFilterValue } from "../redux/contactsSlice";
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import styles from './form.module.css';

const App = () => {
  const contacts = useContacts();
  const filter = useFilter();
  const dispatch = useContactsDispatch();

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (filterValue) => {
    dispatch(setFilterValue(filterValue));
  };

  return (
    <div className={styles.wrap}>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onAddContact={handleAddContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={contacts} filter={filter} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;