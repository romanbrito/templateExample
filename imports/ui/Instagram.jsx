import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';


import Pic from './Pic';


export default class Instagram extends Component {

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
    console.log("api " + this.props.pics);

    return this.props.pics.map((pic) => (
      <Pic key={pic._id} pic={pic}/>
    ));
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <RaisedButton
            label="Oh Yeah we did it"
            onTouchTap={this.getPics}
          />
        </MuiThemeProvider>

        <ul>
          {/*Display pics from instagram*/}
          {this.renderPics()}

        </ul>

      </div>
    );
  }
}
