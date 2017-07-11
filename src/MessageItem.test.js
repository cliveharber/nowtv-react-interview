import React from 'react';
import ReactDOM from 'react-dom';
import { MessageItem } from './MessageItem';

const message = "This is a test message";
const timestamp = new Date();
const member = {
  email: "test@test.com",
  avatar: "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
};

it('should render message item', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MessageItem message={message} timestamp={timestamp} member={member}/>, div);
});