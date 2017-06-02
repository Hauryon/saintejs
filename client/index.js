import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/App';
import moment from 'moment';
import 'moment/locale/fr';


Meteor.startup(() => {
  moment.locale('fr');
  render(<App />, document.querySelector("#root"));
});