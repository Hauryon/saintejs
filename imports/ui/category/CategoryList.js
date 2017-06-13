import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import CategorySingle from './CategorySingle';
import {Category} from '../../api/category/category'; 
import { List } from 'semantic-ui-react';

class CategoryList extends Component {
  render() {
    return (
      <div>
        <List>
            {this.props.category.map((category) => {
              return <CategorySingle key={category._id} category={category}/>
            })}
        </List>        
      </div>
    );
  }
}

export default CategorysWithData = createContainer(() => {
  const categoryHandle = Meteor.subscribe('category');
  const loading = !categoryHandle.ready();
  return {
    loading,
    category: !!Category.find().fetch() ? Category.find().fetch() : [],
  };
}, CategoryList);