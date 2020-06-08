import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link,Route} from 'react-router-dom';
    
class Home extends Component {
  render() {
    return (
     <div>
        <img class = "shrinkToFit" src="https://66.media.tumblr.com/1c86a42d1e6ad7ad37009144f9177e13/tumblr_pt3f92kjS71vlq9wco1_1280.jpg" alt="bank"/>
          <h1>Bank of React</h1>
<Link to="/login">Log in</Link>
    <br/>
<Link to="/userProfile">User Profile</Link>
    <br/>
<Link to="/debits">Debits</Link>
      <br/>
<Link to="/credits">Credits</Link>

   </div>
    );
  }
}

export default Home;