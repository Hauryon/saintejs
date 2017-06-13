import React, {Component} from 'react';
import {Form, List} from 'semantic-ui-react'; 
import {Meteor} from 'meteor/meteor';
import CategoryList from '../category/CategoryList';

export default class CategoryForm extends Component {

  state = {name:""}

    handleChange = (e, { name, value }) => {
      this.setState({ [name]: value })
    }

    handleSubmit = e => {
      e.preventDefault() 
      const { name } = this.state;
      console.log(this.state);
      Meteor.call('category.add', {name}, (err, res) => {
      if(err) {
        console.log(err);
      } else {
        this.setState({name:""})
      }
    });
    }


  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input label='Technologie' placeholder='Technologie' name='name' type='text' value={this.state.name} onChange={this.handleChange}/>
          <br/>
          <Form.Button type="submit">Créer</Form.Button>
        </Form>
        <br/>
        <List>
        <CategoryList />
        </List>
      </div>
    );
  }
}