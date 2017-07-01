import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import { Pics } from '../api/pics';

import Instagram from './Instagram';


class App extends Component {
  render() {
    return (
      <Instagram/>
    );
  }
}

export default createContainer(() => {
  // subscribe api after removing autopublish

  return {
    pics: Pics.find({}, {limit: 3} ).fetch(),
  }
}, Instagram);