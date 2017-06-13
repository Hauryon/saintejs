import { Mongo } from 'meteor/mongo';

export const Category = new Mongo.Collection("category");

Category.deny({
  insert() {
    return true;
  },
  update() {
    return true;
  },
  remove() {
    return true;
  }
})