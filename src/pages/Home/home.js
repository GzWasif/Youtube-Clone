import React from "react";
import "./home.css";
import Sidebar from "../../components/sidebar/sidebar";
import Recommended from "../../components/recommended/recommended";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Recommended />
    </div>
  );
};

export default Home;
