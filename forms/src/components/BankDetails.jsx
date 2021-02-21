import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import currency from '../components/currency.json';
 class BankDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currencyData: [...currency]
        }
    }
    getCurrency() {
        currency.map(item => {
            if (item.name === this.props.country) {
                this.setState({ currencyvalue: item.cur })
            }
        })

    }
    render() {
        return (
            <div>
                <form >
                    <label>Country
                        <select name="country" onChange={this.props.handleChange("country")} value={this.props.country}>
                        <option value={this.state.currencyData[0].name} >{this.state.currencyData[0].name}</option>
                                <option value={this.state.currencyData[1].name} >{this.state.currencyData[1].name}</option>
                                <option value={this.state.currencyData[2].name} >{this.state.currencyData[2].name}</option>
                                <option value={this.state.currencyData[3].name} >{this.state.currencyData[3].name}</option>
                                <option value={this.state.currencyData[4].name} >{this.state.currencyData[4].name}</option>
                        </select>
                    </label><br></br>
                    <label>
                    Currency: <input  type="text" name="currency'"  value={this.props.currency}  onChange={this.props.handleChange("currency")} /></label><br></br>
                    <label>IFSC code
                        <input type="text" name="ifsccode"  value={this.props.ifsccode} onChange={this.props.handleChange("ifsccode")} />
                    </label><br></br>
                    <label>ACH routing number
                        <input type="text" name="ach" value={this.props.ach} onChange={this.props.handleChange("ach")}  />
                    </label><br></br>
                    <label>Account Number
                        <input type="text" name="acntNumber" value={this.props.acntNumber} onChange={this.props.handleChange("acntNumber")}  />
                    </label><br></br>

                </form>
                <div>
                    <button className="previousbtn"><Link to="/">Previous</Link></button>
                    <button><Link to="/Address">Next</Link></button>
                </div>
            </div>
        )
    }
}
export default BankDetails;