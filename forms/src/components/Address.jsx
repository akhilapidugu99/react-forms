import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Address extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <form>
                    <p>Country : <span>{this.props.country}</span></p>
                    <label>City
                        <input type="text" name="city" value={this.props.city} onChange={this.props.setAddressDetails} />
                    </label><br></br>

                    <label>Post code
                        <input type="text" name="postcode" value={this.props.postcode} onChange={this.props.setAddressDetails} />
                    </label><br></br>

                    <label>Address
                        <input type="text" name="address" value={this.props.address} onChange={this.props.setAddressDetails} />
                    </label><br></br>

                </form>
                <div>
                    <button ><Link to="/BankDetails">Back</Link></button>
                    {/* <button ><Link to="/Address">Next</Link></button> */}
                    <button >Submit Data </button>
                </div>
            </div>
        )
    }
}
export default Address;