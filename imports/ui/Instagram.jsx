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
          <div className="col s3"><img src="" alt=""/></div>
          {this.renderPics()}
        </div>


      </div>
    );
  }
}
