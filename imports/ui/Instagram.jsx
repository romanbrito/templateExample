import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';


import Pic from './Pic';
import { Pics } from '../api/pics';


class Instagram extends Component {

  getPics() {
    console.log("getpics");
    Meteor.call('getInstagram', (error) => {
      if (error) {
        console.log("error " + error.reason);
      } else {
        console.log("Instagram api ok");
      }
    });
  }

  renderPics() {
    console.log("api render " + this.props.pics);
    //console.log("profile pic " + this.props.pics[0].profilePic)


    return this.props.pics.map((pic) => (
      <Pic key={pic._id} pic={pic}/>
    ));
  }

  render() {
    return (
      <div>
        {/*<MuiThemeProvider>*/}
          {/*<RaisedButton*/}
            {/*label="Oh Yeah we did it"*/}
            {/*onTouchTap={this.getPics()}*/}
          {/*/>*/}
        {/*</MuiThemeProvider>*/}

        {this.getPics()}
        <div className="row">
          {/*Display pics from instagram*/}
          <div className="col s12 m6 l3 xl3"><i className="fa fa-instagram" aria-hidden="true"></i></div>
          {this.renderPics()}
        </div>


      </div>
    );
  }
}

export default createContainer(() => {
  // subscribe api after removing autopublish

  return {
    pics: Pics.find({}, {limit: 3} ).fetch(),
  }
}, Instagram);
