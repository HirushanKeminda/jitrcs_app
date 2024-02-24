import React from "react";
import { BasicTable } from "../../Atoms";
import { Button } from "../../Atoms";
import "./index.css";

const sampleHeaderData = [
    { header: "First Name" },
    { header: "Last Name" },
    { header: "Email Address" },
    { header: "Date of birth" },
    { header: "Age" },
    { header: "Salary" },
    { header: "Department" },
  ];

  const sampleRowData = [
    {
      Data: [
        { data: "John" },
        { data: "Doe" },
        { data: "john.doe@example.com" },
        { data: "1990-05-15" },
        { data: 31 },
        { data: 60000 },
        { data: "Engineering" },
      ],
    },
    {
      Data: [
        { data: "Alice" },
        { data: "Smith" },
        { data: "alice.smith@example.com" },
        { data: "1985-10-20" },
        { data: 36 },
        { data: 70000 },
        { data: "Marketing" },
      ],
    },
    {
      Data: [
        { data: "Michael" },
        { data: "Johnson" },
        { data: "michael.johnson@example.com" },
        { data: "1978-03-08" },
        { data: 43 },
        { data: 80000 },
        { data: "Finance" },
      ],
    },
    {
      Data: [
        { data: "Emily" },
        { data: "Brown" },
        { data: "emily.brown@example.com" },
        { data: "1995-12-25" },
        { data: 26 },
        { data: 65000 },
        { data: "Human Resources" },
      ],
    },
    {
      Data: [
        { data: "David" },
        { data: "Wilson" },
        { data: "david.wilson@example.com" },
        { data: "1982-08-12" },
        { data: 39 },
        { data: 75000 },
        { data: "Operations" },
      ],
    },
  ];


export const EmployeeTableData = (props) => {
  const handleDelete = () => {
    console.log("delete employee");
  };

  const handleEditClick = (event,index) =>{
    props.handleEdit(event,index)
    const firstData = sampleRowData[index].Data[0].data;
    props.setFirstName(firstData)
  }

  return (
    <div className="d-flex justify-content-center">
      <BasicTable
        styles="table table-striped text-center"
        tabelHeaderdata={sampleHeaderData}
        tableRowData={sampleRowData}
        handelEdit={handleEditClick}
        handelDelete={handleDelete}
      />
    </div>
  );
};
