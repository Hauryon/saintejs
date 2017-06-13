import {Meteor} from 'meteor/meteor';
import {Users} from './publications';

Meteor.publish('users', function() {
  return Meteor.users.find();
});
