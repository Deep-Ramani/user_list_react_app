import React from "react";
import { Avatar } from "../../Avatar/Avatar";
import { Email } from "../../Email/Email";
import { Name } from "../../Name/Name";
import "./User.css";
import { Status } from "./Status/Status";
import { Access } from "./Access/Access";


export const User = (props) => {
  return (
    <tr>
      <td>
        <div className="UserInformation">
          <div className="userAvatar">
            {/* <img src={props.user.Image} alt="not display"></img> */}
            <Avatar avatar={props.user.Image}/>
          </div>
          <div className="UserNameAndEmail">
            <div className="name">
              <Name name={props.user.Name} />
            </div>
            <div className="email">
              <Email email={props.user.Email}/> 
              </div>
          </div>
        </div>
      </td>
      <td className="status">
      <Status status={props.user.Status}/>
      </td>
      <td>
      <Access access={props.user.Access}/>
      </td>
    </tr>
  );
};
