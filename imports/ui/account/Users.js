import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { From, List } from 'semantic-ui-react'; 

class Users extends Component {
  render() {
    return (
      <div>
        <List>
          {this.props.users.map((user) => {
            return <div>{user.emails[0].address}</div>;
          })}
        </List>
      </div>
    );
  }
}

export default UsersWithData = createContainer(() => {
  Meteor.subscribe('users');
  if(Meteor.users) {
    var users = Meteor.users.find().fetch()
  } else {
    var users = [];
  }
  
  return {
    users: users,
  };
}, Users);