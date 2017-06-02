import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './home/Home';
import Events from './events/Events';
import EventsForm from './eventform/EventsForm';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/events">Evennements</Link></li>
            <li><Link to="/addevent">Ajout</Link></li>
          </ul>
          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/addevent" component={EventsForm} />

        </div>
        

      </Router>
    );
  }
}
