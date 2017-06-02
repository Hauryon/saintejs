import {Meteor} from 'meteor/meteor';
import  {Events} from './events';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

Meteor.methods({
  'events.get'() {

  },
  'events.add'({title, description, date}) {
    new SimpleSchema({
      title: { type: String },
      description: {type: String},
      date: { type: Date }
    }).validate({title, description, date});

    return Events.insert({
      title, 
      description, 
      date: new Date(date),
      createAt: new Date()
    })
  }

})