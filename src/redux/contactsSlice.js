import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector, Provider as ReactReduxProvider } from 'react-redux';
import filterReducer from '../redux/filterSlice'

// actions
export const addContact = (contact) => ({
  type: 'contacts/addContact',
  payload: contact,
});

export const deleteContact = (contactId) => ({
  type: 'contacts/deleteContact',
  payload: contactId,
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

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterReducer, 
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
  return <ReactReduxProvider store={store}>{children}</ReactReduxProvider>;
};