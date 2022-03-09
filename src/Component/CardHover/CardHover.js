import React from "react";
import "./CardHover.css";
import { Name } from "../Name/Name";
import { useSelector } from "react-redux";
import { Email } from "../Email/Email";
import { ClicksReviewed } from "./ClicksReviewed/ClicksReviewed";
import { MonthlyClicks } from "./MonthlyClicks/MonthlyClicks";
import NoneHoverEmoji from '../../assets/images/NoneHoverEmoji.png'
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
        <div className="Plan">
          <b>Your Plan : Standard</b>
        </div>
        <div className="btn-warning">
          <b>Active User</b>
        </div>
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
          <tr>
            <td>
              <div className="clicksnumber">
                <b className="clicksreviewed">
                  <ClicksReviewed
                    clicksreviewed={users[index].ClicksReviewed}
                  />
                </b>{" "}
                <br /> clicks reviewed
              </div>
            </td>
            <td>
              <div className="betweenborder">
                <b className="monthlyclicks">
                  <MonthlyClicks monthlyclicks={users[index].MonthlyClicks} />
                </b>{" "}
                <br /> Monthly clicks
              </div>
            </td>
          </tr>
        </div>
      </div>
    );
  } else {
    return (
      <div className="CardHover1">
        <div className="nonhoveremoji">
        <img src={NoneHoverEmoji} alt="not display"/>
          
        </div>
        <div>I'll appear when you hover over the User.</div>
      </div>
    );
  }
};
