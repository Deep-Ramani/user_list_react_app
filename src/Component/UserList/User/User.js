import React from "react";
import { Avatar } from "../../Avatar/Avatar";
import { Name } from "../../Name/Name";
import "./User.css";

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
            <div className="email">{props.user.Email}</div>
          </div>
        </div>
      </td>
    </tr>
  );
};
