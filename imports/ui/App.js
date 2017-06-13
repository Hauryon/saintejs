import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import Home from './home/Home';
import EventsList from './events/EventsList';
import EventsForm from './eventform/EventsForm';
import CreatAccountForm from './account/CreatAccountForm';
import LogIn from './account/LogIn';
import Profile from './account/Profile';
import { createContainer } from 'meteor/react-meteor-data';
import UsersList from './users/UsersList';
import CategoryForm from './categoryForm/CategoryForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu inverted>
            <Link className="item" to="/">Accueil</Link>
            <Link className="item" to="/events">Evennements</Link>
            <Link className="item" to="/users">Utilisateurs</Link>
            <Link className="item" to="/addevent">Ajout</Link>
            {this.props.loggedIn ?
              null
              :
              <Link className="item" to="/creataccount">Créer un compte</Link>
            }
            {this.props.loggedIn ?
              <Link className="item" to="/profile">Profil</Link>
              :
              <Link className="item" to="/login">Login</Link>
            }
             <Link className="item" to="/category">Catégories</Link>
                                     
         </Menu>

          <Route exact path="/" component={Home} />
          <Route path="/events" component={EventsList} />
          <Route path="/addevent" component={EventsForm} />
          <Route path="/creataccount" component={CreatAccountForm} />
          <Route path="/login" component={LogIn} />
          <Route path="/profile" component={Profile} />
          <Route path="/users" component={UsersList} />
          <Route path="/category" component={CategoryForm} />
        </div>
        
      </Router>
    );
  }
}
export default AppWithData = createContainer(() => {
  return {
    loggedIn: Meteor.user()
  };
}, App);