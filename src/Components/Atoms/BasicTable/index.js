import React from "react";
import { Button } from "../Button";

export const BasicTable = (props) => {
  return (
    <table className={props.styles}>
      <thead>
        <tr>
          {props.tabelHeaderdata.map((item, index) => (
            <th key={index}>{item.header}</th>
          ))}
          <th colspan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        {props.tableRowData.map((item, index) => (
          <tr key={index}>
            {item.Data.map((item, index) => (
              <td key={index}>{item.data}</td>
            ))}

            <td><Button type="warning" label="Edit" onClick={(event)=>props.handelEdit(event,index)}/></td>
            <td><Button type="danger" label="Delete" onClick={props.handelDelete}/></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
