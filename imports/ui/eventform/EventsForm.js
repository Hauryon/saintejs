import React, {Component} from 'react';
import { Form } from 'semantic-ui-react'
import {Meteor} from 'meteor/meteor'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


export default class EventsForm extends Component {
  state = {title: "", description: "", date: moment()}
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleDate = (date) => {
    this.setState({ date: date })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { title, description, date } = this.state
    Meteor.call('events.add', {title, description, date: date.toDate()}, (err, res) => {
      if(err) {
        console.log(err);
      } else {
        this.setState({title: "", description: "", date: moment()})
      }
    });

    
  }
  render() {
    return (
      <div>
         <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input label='Titre' placeholder='Titre' value={this.state.title} name="title" onChange={this.handleChange}/>
            <div className="field">
              <label>Date</label>
              <DatePicker
                name="date"
                selected={this.state.date}
                onChange={this.handleDate}
              />
            </div>
            
          </Form.Group>
          <Form.TextArea label='Description' placeholder='Description' value={this.state.description} name="description" onChange={this.handleChange}/>
          <Form.Button>Créer</Form.Button>
        </Form>
      </div>
    );
  }
}
