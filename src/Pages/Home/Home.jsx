import React from "react";
import { Divider } from "antd";
import GeoContainer from "../../Components/GeoContainer/GeoContainer";
import DataViewer from "../../Components/DataViewer/DataViewer";

const Home = () => {
  return (
    <main>
      <GeoContainer />
      <Divider orientation="left"></Divider>
      <DataViewer />
    </main>
  );
};

export default Home;
