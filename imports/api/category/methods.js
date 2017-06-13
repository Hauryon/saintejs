import {Meteor} from 'meteor/meteor';
import  {Category} from './category';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

Meteor.methods({
  
  'category.add'({name}) {
    new SimpleSchema({
      name: { type: String },
      }).validate({name});

    return Category.insert({
      name,
    })
  }

})