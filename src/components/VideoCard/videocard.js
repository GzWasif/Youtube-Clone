import React from "react";
import { Avatar } from "@mui/material";
import "./videocard.css";

const Videocard = ({ thumbnail, logo, title, channel, views, timestamp }) => {
  return (
    <div className="videocard">
      <img
        className="videocard_thumbnail"
        src={thumbnail}
        alt="thumbnail_image"
      ></img>
      <div className="videocard_info">
        <Avatar src={logo} alt="channel logo" className="videocard_logo" />
        <div className="videocard_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views}. {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Videocard;
