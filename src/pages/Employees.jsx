import React from "react";

import {
  GridComponent,
  ColumnDirective,
  Page,
  Search,
  Toolbar,
  Inject,
  ColumnsDirective,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../data/dummy";

import { Header } from "../components";

const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Page" title="Employees" />
      {/*  Grid Element */}
      <GridComponent
        // table data
        dataSource={employeesData}
        // pagination
        allowPaging
        // sorting
        allowSorting
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        {/* To make pagination, search with toolbar */}
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
