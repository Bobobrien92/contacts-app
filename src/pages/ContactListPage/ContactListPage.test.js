import React from 'react';
import ReactDOM from 'react-dom';
import ContactListPage from './ContactListPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactListPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
