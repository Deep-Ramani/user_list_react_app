import React from "react";
import "./CardHover.css";
export const CardHover = () => {
  return (
    <div className="CardHover">
      <div className="AvatarImg1">
        <img
          src="https://reqres.in/img/faces/1-image.jpg"
          alt="not display"
        ></img>
      </div>
      <div className="UserName">Deep Ramani</div>
      <div className="UserEmail">deepramani@gmail.com</div>
      <div className="Plan">Your Plan: Standard</div>
      <div className="btn-primary">Active User</div>
      <div>
        Plan Uses
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div className="clicks">
      <div className="clicksreviewed">
        2450  <br/> clicks reviewed
      </div>
      <div className="monthlyClicks">
        5000 <br/> Monthly Clicks
      </div>
      </div>
    </div>
  );
};
