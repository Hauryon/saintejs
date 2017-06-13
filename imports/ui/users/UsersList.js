import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import UsersSingle from './UsersSingle';
import { List } from 'semantic-ui-react';

class UsersList extends Component {
  render() {
    return (
      <div>
        <List>
            {this.props.users.map((user) => {
              return <UsersSingle key={user._id} user={user}/>
            })}
        </List>        
      </div>
    );
  }
}

export default UsersWithData = createContainer(() => {
  const usersHandle = Meteor.subscribe('users');
  const loading = !usersHandle.ready();
  return {
    loading,
    users: !!Meteor.users.find().fetch() ? Meteor.users.find().fetch() : [],
  };
}, UsersList);