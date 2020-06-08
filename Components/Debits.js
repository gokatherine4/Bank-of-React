import React from "react"
import { Link } from "react-router-dom"

class Debits extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            debits: []
        }
    }
    debitsView() {
        const { debits } = this.props;
        debugger
        return debits.map((debit) => {
        return <li key={debit.id}>{debit.amount}{debit.date}</li>
        }) 
    }

    render() {
        const {addDebits} = this.props
        return <div>
            <h1>Debit</h1>
            {this.DebitsView()}
            <br/>
            <form action="#" onSubmit={addDebits}>
                Amount: <input type="number" name="amount" />&nbsp;
                Date: <input type="date" name="date" />&nbsp;
                <button type="submit">Add Debit</button>
            </form>

                <br/>
                <br/>
                <Link to="/">Return to Home</Link>
                <br/>
                <Link to="/login">Log in</Link>
                <br/>
                <Link to="/userProfile">User Profile</Link>
                <br/>
                <Link to="/debits">Debits</Link>
                <br/>
                <Link to="/credits">Credits</Link>
        </div>
    }
}

export default Debits;