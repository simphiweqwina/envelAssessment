import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
const App = () => (
  <div>
    <AmplifySignOut />
    <h1>You are now logged in</h1>
  </div>
);

export default withAuthenticator(App);
