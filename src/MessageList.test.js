import React from 'react';
import ReactDOM from 'react-dom';
import { MessageList } from './MessageList';

const messages = [{
    "id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
    "userId": "1",
    "message": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    "timestamp": "2017-02-09T04:27:38Z"
  },
  {
    "id": "b03569ae-ccbf-4975-8040-4daba638b407",
    "userId": "2",
    "message": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    "timestamp": "2016-11-09T05:04:58Z"
  },
  {
    "id": "3a59859e-33f1-4c2b-a636-1f119c484dc8",
    "userId": "3",
    "message": "Suspendisse potenti.",
    "timestamp": "2016-06-03T20:24:29Z"
  },
  {
    "id": "c7252640-af98-442a-9dcd-ddc5e789238a",
    "userId": "1",
    "message": "Nunc purus.",
    "timestamp": "2016-04-07T10:20:42Z"
  }];

const members = [{
    "id": "1",
    "firstName": "Martin",
    "lastName": "Bradley",
    "email": "mbradley0@google.it",
    "avatar": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    "ip": "166.124.172.160"
  },
  {
    "id": "2",
    "firstName": "Helen",
    "lastName": "Hawkins",
    "email": "hhawkins1@posterous.com",
    "avatar": "http://dummyimage.com/100x100.jpg/dddddd/000000",
    "ip": "179.239.189.173"
  },
  {
    "id": "3",
    "firstName": "Denise",
    "lastName": "Sanders",
    "email": "dsanders2@ox.ac.uk",
    "avatar": "http://dummyimage.com/100x100.jpg/ff4444/ffffff",
    "ip": "184.19.42.78"
  }];

it('should render a list of items', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MessageList messages={messages} members={members} />, div);
});
