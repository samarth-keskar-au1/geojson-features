import React, { useState } from "react";
import { Button, Row, Table, Col } from "antd";
import { getDefaultPaginationOptions } from "../../Constants/constants";
import { useGlobalContext } from "../../Context/Context";
import Details from "../Details/Details";
import "./DataViewer.css";

const DataViewer = () => {
  const { data } = useGlobalContext();
  const [modalData, setModalData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseOrOk = () => {
    setIsModalOpen(false);
    setModalData({});
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button
          type="primary"
          onClick={() => {
            setModalData(record?.properties);
            setIsModalOpen(true);
          }}
        >
          View Details
        </Button>
      ),
    },
  ];

  return (
    <Row justify="center">
      <Col span={20}>
        <Table
          pagination={getDefaultPaginationOptions}
          columns={columns}
          dataSource={data?.features}
          rowKey="id"
        />
        {isModalOpen && (
          <Details
            data={modalData}
            open={isModalOpen}
            handleCloseOrOk={handleCloseOrOk}
          />
        )}
      </Col>
    </Row>
  );
};

export default DataViewer;
