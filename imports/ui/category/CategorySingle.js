import React, {Component} from 'react';
import { List } from 'semantic-ui-react';

export default class CategorySingle extends Component {
  render() {
    return (
      <div>
        <List.Header>{this.props.category.name}</List.Header>
        <List.Description>
        </List.Description>
      </div>
    );
  }
}