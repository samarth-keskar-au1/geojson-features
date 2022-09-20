import React from "react";
import { Row, Col } from "antd";
import Form from "../Form/Form";
import Map from "../Map/Map";
import "./GeoContainer.css";

const GeoContainer = () => {
  return (
    <Row align="middle" justify="space-around">
      <Col span={5}>
        <Form />
      </Col>
      <Col span={12}>
        <Map />
      </Col>
    </Row>
  );
};

export default GeoContainer;
