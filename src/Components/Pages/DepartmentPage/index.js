import { useState } from "react";
import { InputLabel, DepartmentTableData } from "../../Molecules";
import { Button } from "../../Atoms";

export const DepartmentPage = () => {
  const [departmentCode, setDepartmentCode] = useState("");
  const [departmentName, setDepartmentName] = useState("");

  const handleOnClick = () => {
    console.log(departmentCode);
    console.log(departmentName);
  };

  return (
    <div>
    
      <InputLabel
        typographyLabel="Department Code"
        InputFieldPlaceHolder="Enter department code"
        setValue={setDepartmentCode}
        value={departmentCode}
      />
      <InputLabel
        typographyLabel="Department Name"
        InputFieldPlaceHolder="Enter department name"
        setValue={setDepartmentName}
        value={departmentName}
      />

      <div className="p-5">
        <Button onClick={handleOnClick} label="Submit" />
      </div>
      <div className="p-5">
        <DepartmentTableData />
      </div>
    </div>
  );
};
