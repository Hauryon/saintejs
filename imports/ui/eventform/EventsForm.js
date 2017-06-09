import React, {Component} from 'react';
import { Form } from 'semantic-ui-react'
import {Meteor} from 'meteor/meteor'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


export default class EventsForm extends Component {
  state = {title: "", description: "", date: moment(), place: "", time: "", level: ""}
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleDate = (date) => {
    this.setState({ date: date })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { title, description, date, place, time, level } = this.state
    Meteor.call('events.add', {title, description, date: date.toDate(), place, time: parseInt(time), level}, (err, res) => {
      if(err) {
        console.log(err);
      } else {
        this.setState({title: "", description: "", date: moment(), place: "", time: "", level: ""})
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
          <Form.Group widths='equal'>
            <Form.Input label='Lieu' placeholder='Lieu' value={this.state.place} name="place" onChange={this.handleChange}/>
            <Form.Input label='Heure' placeholder='Heure' value={this.state.time} name="time" onChange={this.handleChange}/>
            <Form.Input label='Niveau' placeholder='Niveau' value={this.state.level} name="level" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Créer</Form.Button>
        </Form>
      </div>
    );
  }
}
