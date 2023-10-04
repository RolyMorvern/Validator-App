import React from 'react'
import './telephone.css'
function Heading () {
	return (
		<div>
		  <h1 className="title">Telephone Validator</h1>
		  <span className="subheading">Validate any phone number!</span>
		</div>
	);
}
class PreCodeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.logChange = this.logChange.bind(this);
  }

  logChange(event) {
    this.setState({
      input: event.target.value,
    });
    this.props.onInputChange(event.target.value);
  }

  render() {
    return (
      <div className="input-container">
        <span className="pre-input">{this.props.pre}</span>
        <input
          onChange={this.logChange}
          placeholder={this.props.placeholder}
          type={this.props.type}
          min="1"
          max="999"
          className="country-code-input input"
        />
      </div>
    );
  }
}
const ThisIs = () => {
    return (
      <h1>This Phone Number Is: </h1>
    )
}
function validateNumber (str) {
    const regex = /^(\(\d{3}\)|\d{3})( ?|\-)\d{3}( ?|\-)\d{4}$/g;
    if (str.match(regex)) {
        return true;
    } else {
        return false;
    }
}
class TelephoneValidator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      isValid: "Undefined"
    };
    this.handleInputChange = this.handleInputChange.bind(this)
    this.validatePhone = this.validatePhone.bind(this)
  }
  handleInputChange = (input) => {
    if (this.state.input.toString().length > 3) {
      this.setState({ input: this.state.input.toString().slice(0, 3) });
    } else if (this.state.input.toString().length < 3) {
      this.setState({ input });
    }
  };
  validatePhone = (input) => {
    if (validateNumber(input)) {
      this.setState({ isValid: "Valid" })
    } else if (input.toString().length == 0) {
      this.setState({ isValid: "Undefined" })
    } else {
      this.setState({ isValid: "Invalid" })
    }
  }
  render() {
    return (
      <div className="container">
        <Heading />
        <PreCodeInput
          pre="+"
          placeholder="Type Country Code"
          onInputChange={this.handleInputChange}
          type="number"
        />
        <PreCodeInput
          pre={`+${this.state.input}`}
          placeholder="Type Phone Number *"
          onInputChange={this.validatePhone}
          type="text"  
        />
        <div className="reveal">
          <ThisIs />
          <h1 id={this.state.isValid}>{this.state.isValid}</h1>
        </div>
      </div>
    );
  }
}
export default TelephoneValidator