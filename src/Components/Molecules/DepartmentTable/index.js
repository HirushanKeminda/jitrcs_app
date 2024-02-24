import React from "react";
import { BasicTable } from "../../Atoms";

export const DepartmentTableData = () => {

    const sampleHeaderData = [
        { header: "Department Code" },
        { header: "Department Name" },
      ];
    const sampleRowData = [
        {
          Data: [
            { data: "001" },
            { data: "Engineering" },
          ],
        },
        {
          Data: [
            { data: "002" },
            { data: "Marketing" },
          ],
        },
        {
          Data: [
            { data: "003" },
            { data: "Finance" },
          ],
        },
        {
          Data: [
            { data: "004" },
            { data: "Human Resources" },
          ],
        },
        {
          Data: [
            { data: "005" },
            { data: "Operations" },
          ],
        },
      ];
      

      const handleEdit=()=>{
        console.log("edit department")
      }
    
      const handleDelete=()=>{
        console.log("delete department")
      }
    

  return (
<div className="d-flex justify-content-center">
      <BasicTable
        styles="table table-hover w-75"
        tabelHeaderdata={sampleHeaderData}
        tableRowData={sampleRowData}
        handelEdit={handleEdit}
        handelDelete={handleDelete}
      />
    </div>
  );
};
