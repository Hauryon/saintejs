import {Meteor} from 'meteor/meteor';
import {Category} from './category';

Meteor.publish('category', function() {
  return Category.find();
});