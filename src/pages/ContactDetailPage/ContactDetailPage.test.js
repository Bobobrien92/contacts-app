import React from 'react';
import ReactDOM from 'react-dom';
import ContactDetailPage from './ContactDetailPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactDetailPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
