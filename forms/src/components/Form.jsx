import React, { Component } from 'react'
import Personal from '../components/Personal.jsx';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Business from '../components/Business.jsx';
import Display from '../components/Display.jsx';
import BankDetails from './BankDetails.jsx';
import Address from './Address.jsx';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            number: '',
            busname: '',
            busemail: '',
            busnumber: '',
            country: '',
            ifsccode: '',
            acntNumber: '',
            ach: '',
            currency: '',
            city: '',
            postcode: '',
            address: '',  
        }
    }
   
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }
   
    render() {
        return (
            <div className="pb">
                <Router>
                    <form >
                    <button ><Link to="/">Personal</Link></button>
                    <button ><Link to="/Business">Business</Link></button></form>
                    <form>
                    <button><Link to="/BankDetails">BankDetails</Link></button>
                    <button><Link to="/Address">Address</Link></button>
                    <button ><Link to="/Display">Display</Link></button></form>
                    
                    <Switch>
                        <Route exact path="/">
                            <Personal  firstName={this.state.fname} lastName={this.state.lname} email={this.state.email} number={this.state.number} handleChange={this.handleChange} />
                        </Route>
                        <Route path="/Business" >
                            <Business  busname={this.state.busname} busemail={this.state.busemail} busnumber={this.state.busnumber} handleChange={this.handleChange} />
                        </Route>
                       <Route  path="/BankDetails">
                            <BankDetails  country={this.state.country} currency={this.state.currency} ifsccode={this.state.ifsccode} ach={this.state.ach} acntNumber={this.state.acntNumber} handleChange={this.handleChange}/>
                       </Route>
                       <Route path="/Address">
                            <Address city={this.state.city} postcode={this.state.postcode} address={this.state.address} handleChange={this.handleChange}/>
                       </Route>
                       <Route path="/Display" >
                            <Display   firstName={this.state.fname} lastName={this.state.lname} email={this.state.email} number={this.state.number} busname={this.state.busname} busemail={this.state.busemail} busnumber={this.state.busnumber}
                            country={this.state.country} currency={this.state.currency} ifsccode={this.state.ifsccode} ach={this.state.ach} acntNumber={this.state.acntNumber} city={this.state.city} postcode={this.state.postcode} address={this.state.address} />
                        </Route>
                    </Switch>

                </Router>

            </div>


        );
    }

}
export default Form;