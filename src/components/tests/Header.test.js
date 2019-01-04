import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import {MemoryRouter} from 'react-router'

describe('Header', () => {

  it('renders as contacts header', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header isDetailsPage={false} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders as details header', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Header isDetailsPage showBack />
      </MemoryRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });

})