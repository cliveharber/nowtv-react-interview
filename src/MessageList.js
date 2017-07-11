import React, { Component } from 'react';
import { find } from 'lodash';

import { MessageItem } from './MessageItem';

export class MessageList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      messages: props.messages,
      members: props.members
    };
  }
  componentWillReceiveProps (props) {
    this.setState({ messages: props.messages, members: props.members });
  }
  findMember (userId) {
    return find(this.state.members, {'id': userId});
  }
  render () {
    return (
        <div>
          {
            this.state.messages.map( (message) =>
              <MessageItem
                message={message.message}
                timestamp={message.timestamp}
                member={this.findMember(message.userId)}
                key={message.id}
              />
            )
          }
        </div>
    );
  }
}