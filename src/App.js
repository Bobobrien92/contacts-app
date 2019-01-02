import React, { Component } from 'react';
import ContactListPage from './pages/ContactListPage/ContactListPage'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactListPage />
      </div>
    );
  }
}

export default App;
