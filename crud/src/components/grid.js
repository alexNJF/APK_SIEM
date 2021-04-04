import React, { Component } from "react";

import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import BtnCellRenderer from "./btn-cell-renderer";

export class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        {
          headerName: "نام و نام خانوادگی",
          field: "name",
          maxWidth: 150,
          sortable: true,
          filter: true,
          floatingFilter: true,
        },
        {
          headerName: "کد ملی",
          field: "natnalCode",
          minWidth: 150,
          sortable: true,
          filter: true,
          floatingFilter: true,
        },
        {
          headerName: "تاریخ تولد",
          field: "birthData",
          maxWidth: 150,
          sortable: true,
          filter: true,
          floatingFilter: true,
        },
        {
          headerName: "تلفن همراه",
          field: "phone",
          minWidth: 150,
          sortable: true,
          filter: true,
          floatingFilter: true,
        },
        {
          headerName: "",
          field: "",
          maxWidth: 60,
          cellRenderer: "btnCellRenderer",
          cellRendererParams: {
            label: "",
            style: "btn btn-primary fr",
            icon: "fa fa-copy",
            clicked: this.copy.bind(this),
          },
        },
        {
          headerName: "",
          field: "",
          maxWidth: 60,
          cellRenderer: "btnCellRenderer",
          cellRendererParams: {
            label: "",
            style: "btn btn-danger",
            icon: "fa fa-trash",
            clicked: this.remove.bind(this),
          },
        },
      ],
      frameworkComponents: {
        btnCellRenderer: BtnCellRenderer,
      },
      rowData: [],
    };
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const httpRequest = new XMLHttpRequest();
    const updateData = (data) => {
      this.setState({ rowData: data });
    };

    httpRequest.open("GET", "http://localhost:8080/datagrid");
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        updateData(JSON.parse(httpRequest.responseText));
      }
    };
  };
  remove(param) {
    this.state.rowData = this.state.rowData.filter(
      (item) => item.id != param.id
    );
    this.setState({ rowData: this.state.rowData });
  }
  copy(param) {
    let tmp = {
      id: this.state.rowData[this.state.rowData.length - 1].id+1,
      name: param.name,
      natnalCode: param.natnalCode,
      phone: param.phone,
      birthData: param.birthData,
    };
    this.state.rowData.push(tmp);
    this.gridApi.setRowData(this.state.rowData);
  }
  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div
          id="myGrid"
          style={{
            height: "50vh",
          }}
          className="ag-theme-alpine "
        >
          <AgGridReact
            enableRtl={true}
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            frameworkComponents={this.state.frameworkComponents}
            onGridReady={this.onGridReady}
            rowData={this.state.rowData}
          />
        </div>
      </div>
    );
  }
}
