import React, {Component} from 'react';
import { List } from 'semantic-ui-react';

export default class UsersSingle extends Component {
  render() {
    return (
      <div className='user-single'>
        <List.Header className='username'>{this.props.user.username}</List.Header>
        <List.Description>
        </List.Description>
      </div>
    );
  }
}