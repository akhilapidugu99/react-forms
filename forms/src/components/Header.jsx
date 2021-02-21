import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div>
                <div>
                    <button><Link to="/">Beneficiary</Link></button>
                    <button><Link to="/BankDetails">BankDetails</Link></button>
                    <button><Link to="/Address">Address</Link></button>
                </div>
            </div>
        )
    }
}
export default Header;