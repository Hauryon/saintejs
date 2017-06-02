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

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu inverted>
            <Link className="item" to="/">Accueil</Link>
            <Link className="item" to="/events">Evennements</Link>
            <Link className="item" to="/addevent">Ajout</Link>
         </Menu>

          <Route exact path="/" component={Home} />
          <Route path="/events" component={EventsList} />
          <Route path="/addevent" component={EventsForm} />

        </div>
        

      </Router>
    );
  }
}
