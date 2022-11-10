import React from "react";

import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Selection,
  Injection,
  Edit,
  Toolbar,
  Inject,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";

import { Header } from "../components";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Page" title="Customers" />
      {/*  Grid Element */}
      <GridComponent
        // table data
        dataSource={customersData}
        // pagination
        allowPaging
        // sorting
        allowSorting
        toolbar={["Delete"]}
        editSettings={{
          allowDeleting: true,
          allowEditing: true,
        }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        {/* To make pagination, search with toolbar */}
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
