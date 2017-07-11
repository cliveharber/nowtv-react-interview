import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const getChatLog = function () { return new Promise (function () {})};
const getRegisteredMembers = function () {return new Promise (function () {})};

it('should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App.WrappedComponent getChatLog={getChatLog} getRegisteredMembers={getRegisteredMembers} />, div);
});
