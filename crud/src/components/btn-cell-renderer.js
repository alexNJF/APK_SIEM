import React, { Component } from "react";

class BtnCellRenderer extends Component {
  constructor(props) {
    super(props);
    this.btnClickedHandler = this.btnClickedHandler.bind(this);
  }
  btnClickedHandler() {
    this.props.clicked(this.props.data);
  }
  render() {
    return (
      <button className={this.props.style} onClick={this.btnClickedHandler}>
        <i className={this.props.icon}></i> {this.props.label ?? "clickMe"}
      </button>
    );
  }
}

export default BtnCellRenderer;
