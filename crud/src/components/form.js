import React, { Component } from "react";
import { render } from "react-dom";
import { DatePicker } from "jalali-react-datepicker";

export class Form extends Component {
  sendData = () => {
    this.props.parentCallback({
        id:0,
        name:"aaaa", 
        natnalCode:"bbbb", 
        phone:"ccccc", 
        birthData:"2020-01-01", 
    });
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
       <button onClick={this.sendData}>کلیک کن مرا</button>
      </div>
    );
  }
}
