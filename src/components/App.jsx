
import styles from './form.module.css';
import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState(''); 

  const handleAddContact = (contact) => {
    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !==id));
    };

    const handleFilterChange = (filterValue) => {
      setFilter(filterValue);
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