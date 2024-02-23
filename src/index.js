import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'; 
import './index.css';
import { Provider } from 'react-redux';
import { store, ContactsSlice } from './redux/contactsSlice'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ContactsSlice>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ContactsSlice>
  </Provider>
);