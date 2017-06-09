import { Mongo } from 'meteor/mongo';

export const Accounts = new Mongo.Collection("accounts");

Accounts.deny({
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