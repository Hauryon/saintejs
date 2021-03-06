import React, {Component} from 'react';
import { List } from 'semantic-ui-react';
import moment from 'moment';

export default class EventSingle extends Component {
  render() {
    return (
      <div className='event-single'>
        <List.Item>
            <List.Content>
              <List.Header className ='title-event' as='a'>{this.props.event.title}</List.Header>
              <List.Description>
                <div className="event-description"> {this.props.event.description}</div>
                <div> Le {moment(this.props.event.date).format('Do MMMM YYYY')} à {this.props.event.time}h</div>
                <div> Lieu : <i>{this.props.event.place}</i></div>
                <div> Niveau : {this.props.event.level}</div>
              </List.Description>
            </List.Content>
          </List.Item> 
      </div>
    );
  }
}