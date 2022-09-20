import React from "react";
import { Modal } from "antd";
import "./Details.css";

const Details = ({ data, open, handleCloseOrOk }) => {
  return (
    <Modal
      title="Feature Details"
      open={open}
      onCancel={handleCloseOrOk}
      onOk={handleCloseOrOk}
    >
      {Object.keys(data).map((ele) => (
        <div>
          {ele}: {data[ele]}
        </div>
      ))}
    </Modal>
  );
};

export default Details;
