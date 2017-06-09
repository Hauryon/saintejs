import React, {Component} from 'react';
import {Form} from 'semantic-ui-react';
import { createContainer } from 'meteor/react-meteor-data';
import {Redirect} from 'react-router-dom'

class login extends Component {

  state = {email:"", password:""}

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault() 
    const { email, password } = this.state;
    Meteor.loginWithPassword ({email},password);
  }

  render() {
    if(this.props.loggedIn) {
     return <Redirect to="/profile" />;
    }
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input label='Mail' placeholder='Mail' name='email' type='email'  value={this.state.email} onChange={this.handleChange}/>
          <Form.Input label='Mot de passe' placeholder='Mot de passe' name='password' type='password'  value={this.state.password} onChange={this.handleChange}/>
          <Form.Button>Login</Form.Button>
        </Form> 
      </div>
    );
  }
}

export default loginWithData = createContainer(() => {
  return {
    loggedIn: Meteor.user()
  };
}, login);