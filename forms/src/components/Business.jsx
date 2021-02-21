import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Business extends Component {
    constructor(props) {
        super(props)
        
    }
   
    render() {
       
        return (
            <div>
                <form className="personal-form" >
                    <label>Business Name
                        <input type="text" name="busname"  value={this.props.busname} onChange={this.props.handleChange('busname')} />
                    </label><br></br>

                    <label>Email
                        <input type="text" name="busemail" value={this.props.busemail}  onChange={this.props.handleChange('busemail')} />
                    </label><br></br>

                    <label>Phone Number
                        <input type="text" name="busnumber"  value={this.props.busnumber}  onChange={this.props.handleChange('busnumber')}/>
                    </label><br></br>

                    <div>
                <button ><Link to="./Display">Next</Link></button>
            </div>
                </form>
                
            </div>
        );
    }
}
export default Business;