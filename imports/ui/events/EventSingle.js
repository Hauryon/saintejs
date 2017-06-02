import React, {Component} from 'react';
import { List } from 'semantic-ui-react';
import moment from 'moment';

export default class EventSingle extends Component {
  render() {
    return (
      <div className='event-single'>
        <List.Item className='test'>
          <List.Content>
            <List.Header as='a'>{this.props.event.title}</List.Header>
            <List.Description>
              <div> {this.props.event.description}</div>
              <div> le {moment(this.props.event.date).format('Do MMMM YYYY')}</div>
            </List.Description>
          </List.Content>
        </List.Item>
      </div>
    );
  }
}
