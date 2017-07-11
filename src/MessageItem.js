import React, { Component } from 'react';

export class MessageItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      message: props.message,
      timestamp: props.timestamp,
      member: props.member
    };
  }
  formatDate (date) {
    return new Date(date).toLocaleString();
  }
  render () {
    return (
      <div>
        <div className="itemListing" title={this.state.member.email}>
          <img src={this.state.member.avatar} role="presentation"/>
          <div>
            <p> <small> {this.formatDate(this.state.timestamp)} </small></p>
            <p> {this.state.message} </p>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}