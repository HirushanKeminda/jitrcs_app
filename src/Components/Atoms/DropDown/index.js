import React from "react";
const data = ["Volvo", "Saab", "Opel", "Audi"];

export const DropDown = () => {
  return (
    
      <select name="cars" id="cars" className="form-select form-select-sm p-2">
        
        {
            data.map((item,index)=>(
                <option className="form-select form-select-sm p-2" key={index} value={item}>{item}</option>
            ))
        }
      </select>
   
  );
};
