import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sortBy } from 'lodash';

import { getChatLog, getRegisteredMembers } from './service';

import { MessageList } from './MessageList';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = { messages: [], members: []};
    console.log(this);
  }
  fetchData () {
    this.props.getChatLog()
      .then( (response) => {
        this.setState({messages: sortBy(response.value, 'timestamp')})
      });

    this.props.getRegisteredMembers()
      .then( (response) => this.setState({members: response.value}));
  }
  componentWillMount () {
    this.fetchData();
  }
  render() {
    return (
      <div>
        <header className='App-header'>
          <h1>Message List</h1>
        </header>
        <MessageList messages={this.state.messages} members={this.state.members} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {getChatLog, getRegisteredMembers};
};

const mapDispatchToProps = dispatch => bindActionCreators({ getChatLog, getRegisteredMembers }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
