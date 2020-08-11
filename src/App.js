import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

console.log(awsconfig)


const App = () => {

  const [usernames, setUsernames] = useState([])

  axios({
    url: 'https://dcd5w0pq9k.execute-api.us-east-1.amazonaws.com/enveldev/envelGetUsers',
    method: 'get'
  })
    .then(response => {
      console.log(response.data)
      setUsernames(response.data)
      console.log(this.state.usernames)
    })
    .catch(err => {
      console.log(err);
    });






  return (
    < div className="container" >
      < AmplifySignOut />
      <h1>Hi {Auth.user.username}</h1>


      <h3>Other users</h3>
      <p>{console.log(usernames)}</p>


      {
        usernames.map((student, index) => (
          <tr data-index={index}>
            <td>{student.username}</td>
          </tr>
        ))
      }
    </div >
  );


};

export default withAuthenticator(App);
