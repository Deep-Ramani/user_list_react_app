import React from "react";
import "./CardHover.css";
import { Name } from "../Name/Name";
import { useSelector } from "react-redux";
import { Email } from "../Email/Email";
export const CardHover = () => {
  const users = useSelector((state) => state.users);
  const index = useSelector((state) => state.selectedIndex);

  if (typeof index === "number") {
    return (
      <div className="CardHover">
        <div className="AvatarImg1">
          <img src={users[index].Image} alt="not display"></img>
        </div>
        <div className="UserName">
          <Name name={users[index].Name} />
        </div>
        <div className="UserEmail">
          <Email email={users[index].Email} />
        </div>
        <div className="Plan">Your Plan: Standard</div>
        <div className="btn-warning">Active User</div>
        <div className="planuses">
          Plan Uses
          <div className="progress">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="clicks">

          {/* <div className="clicksreviewed">
            2450 <br /> clicks reviewed
          </div>
          <div className="monthlyClicks">
            5000 <br /> Monthly Clicks
          </div> */}

          <tr>
            <td>
              <div>
              2450 <br/> clicks reviewd
              </div>
            </td>
            <td>
              <div className="monthlyclicks"> 
              4000 <br/> Monthly clicks
              </div>
            </td>
          </tr>
        </div>
      </div>
    );
  } else {
    return (
      <div className="CardHover1">
        <div>I'll appear when you hover over the User.</div>
      </div>
    );
  }
};
