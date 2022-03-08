import React from "react";
import './Status.css'
export const Status = (props) => {

  if(props.status === "Active")
  {
    return (
      props.status
    )
  }
  return (
    <div className="dropdown">
      <select className="status-item">
        {/* <option value="volvo">Active</option>
        <option value="saab">Inactive</option> */}
       <option> {props.status}</option>
      </select>
    </div>
  );
};
