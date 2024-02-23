import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector, Provider } from 'react-redux';

// actions
export const addContact = (contact) => ({
  type: 'contacts/addContact',
  payload: contact,
});

export const deleteContact = (contactId) => ({
  type: 'contacts/deleteContact',
  payload: contactId,
});

export const setFilterValue = (filter) => ({
  type: 'filter/setFilter',
  payload: filter,
});

// reducers
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilterValue: (state, action) => {
      return action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export const useContacts = () => {
  return useSelector((state) => state.contacts);
};

export const useFilter = () => {
  return useSelector((state) => state.filter);
};

export const useContactsDispatch = () => {
  return useDispatch();
};

export const ContactsSlice = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};