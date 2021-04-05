import React, { Component } from "react";
import { render } from "react-dom";
import { DatePicker } from "jalali-react-datepicker";
import * as moment from "moment-jalaali";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.setState({ birthData:  new Date().toLocaleDateString() });
    console.log("state",this.state);
  }
  sendData = () => {
    this.props.parentCallback(this.state);
  };
  mySubmitHandler = (event) => {
    event.preventDefault();
    console.log("form value:", this.state);
    this.sendData();
    //alert("You are submitting " + this.state.username);
  };
  myChangeHandler = (event) => {
    if (event.target.name === "name")
      this.setState({ name: event.target.value });
    if (event.target.name === "natnalCode")
      this.setState({ natnalCode: event.target.value });
    if (event.target.name === "phone")
      this.setState({ phone: event.target.value });
  };
  dataChecker = ({ value }) => {
    this.setState({ birthData: value._i });
  };

  render() {
    return (
      <div className="container-fluid mt-3 mr-3 ml-3">
        <form onSubmit={this.mySubmitHandler}>
          <div className="row flex-row-reverse">
            <div className="col-3">
              <div className="form-group">
                <input
                  dir="rtl"
                  type="text "
                  className="form-control"
                  id="name"
                  placeholder="نام و نام خانوادگی "
                  name="name"
                  required={true}
                  onChange={this.myChangeHandler}
                />
              </div>
            </div>
            <div className="col-3">
              <div class="form-group">
                <input
                  dir="rtl"
                  type="text"
                  className="form-control"
                  id="natnalCode"
                  placeholder="کد ملی"
                  required={true}
                  maxLength="10"
                  minLength="10"
                  name="natnalCode"
                  onChange={this.myChangeHandler}
                />
              </div>
            </div>
            <div className="col-3">
              <div class="form-group">
                <input
                  dir="rtl"
                  type="text "
                  className="form-control"
                  id="phone"
                  placeholder="تلفن"
                  name="phone"
                  onChange={this.myChangeHandler}
                />
              </div>
            </div>
            <div className="col-3">
              <div class="form-group">
                <DatePicker
                  className="form-control rtl"
                  timePicker={false}
                  onClickSubmitButton={this.dataChecker}
                />
              </div>
            </div>
          </div>
          <div className="row ">
              <div className="col-12">
                  <button type="submit" class="btn btn-block btn-primary">افزودن</button>
              </div>
          </div>
        </form>
        <hr />
      </div>
    );
  }
}
