import React from "react"
import { Link } from "react-router-dom"

class Credits extends React.Component {

    CreditsView() {
        const {Credits} = this.props;
        return Credits.map((Credits) => {
            return <li key={Credits.id}>{Credits.amount}{Credits.date}</li>
        }) 
    }
    render() {
        const {addCredits} = this.props
        return <div>
            <h1>Credits</h1>
            {this.CreditsView()}
            <br/>
            <form action>  onSubmit={addCredits}>
                Amount: <input type="Numbers" name="amount" />&nbsp;
                Date: <input type="Date" name="date" />&nbsp;
                <button type="submit">Add Credit</button>
            </form>

<br/>
 <br/>
     <Link to="/">Return to Home</Link>
     <br/>
     <Link to="/Login">Log in</Link>
         <br/>
     <Link to="/UserProfile">User Profile</Link>
        <br/>
     <Link to="/Debits">Debits</Link>
    <br/>
  <Link to="/Credits">Credits</Link>
        </div>
    }
}

export default Credits;