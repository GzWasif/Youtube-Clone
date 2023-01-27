import React from "react";
import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import Sidebarrow from "../sidebarrow/sidebarrow";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Sidebarrow Icon={HomeIcon} title="Home" selected />
      <Sidebarrow Icon={WhatshotIcon} title="Trending" />
      <Sidebarrow Icon={SubscriptionsIcon} title="Subscription" />
      <hr />
      <Sidebarrow Icon={VideoLibraryIcon} title="Library" />
      <Sidebarrow Icon={HistoryIcon} title="History" />
      <Sidebarrow Icon={OndemandVideoIcon} title="Your Videos" />
      <Sidebarrow Icon={WatchLaterIcon} title="Watch Later" />
      <Sidebarrow Icon={ThumbUpOffAltIcon} title="Liked Videos" />
      <Sidebarrow Icon={ExpandMoreIcon} title="Show more" />
      <hr />
    </div>
  );
};

export default Sidebar;
