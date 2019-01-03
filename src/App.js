import React, { Component } from 'react';
import ContactListPage from './pages/ContactListPage/ContactListPage'
import ContactDetailPage from './pages/ContactDetailPage/ContactDetailPage'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={ContactListPage} />
            <Route exact path="/contacts" component={ContactListPage} />
            <Route exact path="/contacts/:id" component={ContactDetailPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
