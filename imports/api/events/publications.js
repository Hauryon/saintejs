import {Meteor} from 'meteor/meteor';
import {Events} from './events';

Meteor.publish('events', function() {
  console.log('toto');
  return Events.find();
});