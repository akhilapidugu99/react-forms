import React, { Component } from 'react';

export default class Display extends Component {
    constructor(props){
        super(props);
        }
    
    render() {
        return(
            <>
             <h2>Display Business Details:</h2>
                    Business Name: <b>{this.props.busname}</b><br />
                    Email:<b>{this.props.busemail}</b><br/>
                    Phone Number:<b>{this.props.busnumber}</b>
            <h2>Display Personal Details:</h2>
                First Name: <b>{this.props.firstName}</b><br />
                Last Name: <b>{this.props.lastName}</b><br />
                Email:<b>{this.props.email}</b><br/>
                Phone Number:<b>{this.props.number}</b>
            <h2>Bank Details:</h2>
                Country: <b>{this.props.country}</b><br />
                Currency: <b>{this.props.currency}</b><br />
                IFSC Code:<b>{this.props.ifsccode}</b><br/>
                ACH routing number:<b>{this.props.ach}</b><br/>
                Account Number:<b>{this.props.acntNumber}</b>
            <h2>Address Details:</h2>
                City:<b>{this.props.city}</b><br />
                Post Code:<b>{this.props.postcode}</b><br />
                Address:<b>{this.props.address}</b>
               
            </>
        );}
         
    
}