import React, { Component } from 'react';
import ContactListPage from './pages/ContactListPage/ContactListPage'
import ContactDetailPage from './pages/ContactDetailPage/ContactDetailPage'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/app.css';
import { connect } from 'react-redux';
import * as contactActions from './actions/actions'
import { bindActionCreators } from 'redux';

class App extends Component {

  componentDidMount = async () => {
    this.props.contactActions.fetchContacts()
  }

  render() {
    return (
      <div className="App appContent">
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


const mapStateToProps = state => ({
  contacts: state.contacts,
})

const mapDispatchToProps = dispatch => ({
  contactActions: bindActionCreators(contactActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)