import React, {Component} from 'react';

export default class Pic extends Component {

  render() {
    {
      console.log(this.props.pic)
    }

    return (
      <div className="col s3">
        <img src={this.props.pic.imageURL} alt={this.props.pic.imageURL}/>
      </div>
    );
  }
}