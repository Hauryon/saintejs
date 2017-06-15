import '../imports/api/events/methods';
import '../imports/api/events/publications';
import '../imports/api/account/publications';
import '../imports/api/category/methods';
import '../imports/api/category/publications';
import {Events} from '../imports/api/events/events';
import faker from 'faker';


Meteor.startup(() => {
  faker.locale = "fr";
  
  if(Meteor.users.find().fetch().length === 0) {

    function Users(email, username, password) {
      this.email = email;
      this.username = username;
      this.password = password;
    }

    const users = [
      {
        email: "toto@toto.com",
        username: "Toto",
        password: "toto"
      }
    ];

    for(var i=0; i<10; i++){
      users.push(new Users(faker.internet.email(), faker.internet.userName(), faker.internet.password()))
    }

    users.forEach((user, index) => {
      const id = Accounts.createUser({email: user.email, username: user.username, password: user.password});
      if(index === 0) {
        Roles.addUsersToRoles(id, ["admin"]);
      } else {
        Roles.addUsersToRoles(id, ["user"]);
      }
    });
  }

  if(Events.find().fetch().length === 0) {
    function Event(title, date, description, time, place, level) {
      this.title = title;
      this.date = date;
      this.description = description; 
      this.time = time;
      this.place = place;
      this.level = level;
    }

    const events = [];

    for(var i=0; i<100; i++){
      events.push(new Event(faker.name.title(), faker.date.future(), faker.lorem.paragraphs(), faker.random.number(), faker.address.city(), faker.lorem.word()))
    }
    events.forEach((event) => {
      Events.insert(event);
    })
  }
});