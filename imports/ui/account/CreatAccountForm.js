import React, {Component} from 'react';
import {Form} from 'semantic-ui-react'
import {Meteor} from 'meteor/meteor'


export default class CreatAccountForm extends Component {

  state = {username:"", email:"", password:"", verifypassword:""}

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault() 
    const { username, email, password, verifypassword } = this.state;
    console.log(email);
    console.log(password);

    if (this.state.password === this.state.verifypassword){
      Accounts.createUser({username, email, password}, (err, res) => {
        if(err) {
          console.log(err);
        }
          if(this.state.username === "") {
            alert("Entrez un Pseudo")
          }
      });
    } else {
      alert("probleme mdp");
    }
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input label='Pseudo' placeholder='Pseudo' name='username' type='text' value={this.state.username} onChange={this.handleChange}/>
          <Form.Input label='Mail' placeholder='Mail' name='email' type='email' value={this.state.email} onChange={this.handleChange}/>
          <Form.Input label='Mot de passe' placeholder='Mot de passe' name='password' type='password' value={this.state.password} onChange={this.handleChange}/>
          <Form.Input label='Vérification mot de passe' placeholder='Mot de passe' name='verifypassword' type='password' value={this.state.verifypassword} onChange={this.handleChange}/>
          <br/>
          <Form.Button type="submit">Créer</Form.Button>
        </Form>
      </div>
    );
  }
}