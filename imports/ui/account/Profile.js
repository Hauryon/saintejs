import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Redirect } from 'react-router-dom';
import LogIn from './LogIn';
import {Form} from 'semantic-ui-react';



class Profile extends Component {
  handleClick = () => {
    Meteor.logout()
  }
  render() {
    if(!this.props.loggedIn) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
          Bienvenue sur votre profil 
          <br />
          {this.props.email}
          <Form.Button onClick={this.handleClick}>Logout</Form.Button>
      </div>
    );
  }
}

export default ProfileWithData = createContainer(() => {
  if(Meteor.user()) {
    var email = Meteor.user().emails[0].address
  } else {
    var email = '';
  }
  
  return {
    email: email,
    loggedIn: Meteor.user()
  };
}, Profile);