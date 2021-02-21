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
                    <p>Address Details</p>
                    <label>City
                        <input type="text" name="city" value={this.props.city} onChange={this.props.handleChange("city")} />
                    </label><br></br>

                    <label>Post code
                        <input type="text" name="postcode" value={this.props.postcode} onChange={this.props.handleChange("postcode")}/>
                    </label><br></br>

                    <label>Address
                        <input type="text" name="address" value={this.props.address} onChange={this.props.handleChange("address")} />
                    </label><br></br>
                </form>
                <div>
                <button className="previousbtn"><Link to="/BankDetails">Previous</Link></button>
                    <button><Link to="./Display" >Submit Data </Link></button>
                </div>
            </div>
        )
    }
}
export default Address;