import {Meteor} from 'meteor/meteor';
import  {Events} from './events';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

Meteor.methods({
  'events.get'() {

  },
  'events.add'({title, description, date, place, time, level}) {
    new SimpleSchema({
      title: { type: String },
      description: {type: String},
      date: { type: Date },
      place: { type: String},
      time: {type: Number},
      level: {type: String}
    }).validate({title, description, date, place, time, level});

    return Events.insert({
      title, 
      description, 
      date: new Date(date),
      createAt: new Date(), 
      place,
      time, 
      level
    })
  }

})