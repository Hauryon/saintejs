import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Events} from '../../api/events/events';
import EventSingle from './EventSingle';
import { List } from 'semantic-ui-react';


class EventsList extends Component {
  render() {
    return (
      <div>
       <List>
          {this.props.events.map((event) => {
            return <EventSingle key={event._id} event={event}/>
          })}
        </List>
      </div>
    );
  }
}

export default EventsWithData = createContainer(() => {
  const eventsHandle = Meteor.subscribe('events');
  const loading = !eventsHandle.ready();
  return {
    loading,
    events: !!Events.find().fetch() ? Events.find().fetch() : [],
  };
}, EventsList);