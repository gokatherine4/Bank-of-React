import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home';
import UserProfile from './Components/UserProfile';
import Credits from './Components/Credits';
import Debits from './Components/Debits';
import LogIn from './Components/LogIn';
import axios from "axios";

class App extends Component {

  constructor() {
    super();
    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      },
  
    debits: [],
    credits: []
  }
  this.addDebit = this.state.addDebit.bind(this)
  this.addCredit = this.state.addCredit.bind(this)
}

async componentDidMount(){
let debits = axios.get("https://moj-api.herokuapp.com/debits")
let credits = axios.get("https://moj-api.herokuapp.com/credits")
debits = debits.data
credits = credits.data
let debitSum = 0
let creditSum = 0
let total = this.state.accountBalance;
debits.forEach((debits) =>{
  debitSum += debits.amount
});
credits.forEach((credits) =>{
  creditSum += credits.amount
});
  
}

mockLogIn = (logInInfo) => {
  const newUser = {...this.state.currentUser}
  newUser.userName = logInInfo.userName
  this.setState({currentUser: newUser});
};

render(){
  const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
  const UserProfileComponent = () => 
  (<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
      );
  const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>);
  const AccountBalanceComponent = () => (<accountBalance accountBalance={this.state.accountBalance}/>);
  const DebitsComponent = () => (<Debits addDebits={this.addDebits} Debits={this.Debits} />  );
  const CreditsComponent = () => (<Credits addCredits={this.addCredits} Credits={this.Credits} />
    );
  
  
  return (
      <Router>
        <div>
          <Route exact path="/" render={HomeComponent}></Route>
          <Route exact path="/UserProfile" render={UserProfileComponent}></Route>
          <Route exact path="/Login" render={LogInComponent}></Route>
          <Route path="/" render={AccountBalanceComponent}></Route>
          <Route exact path="/Debits" render={DebitsComponent}></Route>
            <Route exact path="/Credits" render={CreditsComponent}></Route>
            </div>
        </Router>
    );
}
}

export default App;