import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Personal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        return (
            
            <div>
                <form >
                    <label>First Name
                        <input type="text" name="fname" value={this.props.firstName} onChange={this.props.handleChange('fname')}/>
                    </label><br></br>

                    <label>Last Name
                        <input type="text" name="lname" value={this.props.lastName} onChange={this.props.handleChange('lname')} />
                    </label><br></br>

                    <label>Email
                        <input type="text" name="email" value={this.props.email} onChange={this.props.handleChange('email')} />
                    </label><br></br>

                    <label>PhoneNumber
                        <input type="text" name="number" value={this.props.number} onChange={this.props.handleChange('number')} />
                    </label><br></br>
                    <div>
                    <button ><Link to="./BankDetails">Next</Link></button>
                </div>
                </form>
                
            </div>
        );
    }
}
export default Personal;