import React from "react";
import { InputNumber, Button, Form } from "antd";
import { latitudeBounds, longitudeBounds } from "../../Constants/constants";
import { useGlobalContext } from "../../Context/Context";
import "./Form.css";

const FormComponent = () => {
  const { query, setQuery, error, setError } = useGlobalContext();

  const onFinish = (values) => {
    const { min_longitude, max_longitude, min_latitude, max_latitude } = values;
    if (min_latitude > max_latitude || min_longitude > max_longitude) {
      setError({
        show: true,
        msg: "Maximum latitude/longitude value should be more than Minimum latitude/longitude.",
      });
      return;
    }
    setQuery(values);
  };
  const handleFormChange = () => {
    setError({ show: false, msg: "" });
  };
  return (
    <>
      <Form
        name="basic"
        initialValues={query}
        onFinish={onFinish}
        onChange={handleFormChange}
      >
        <Form.Item
          label="Minimum Longitude"
          name="min_longitude"
          rules={[{ required: true }]}
        >
          <InputNumber
            placeholder={`Allowed values between ${longitudeBounds.min} and ${longitudeBounds.max}`}
            {...longitudeBounds}
            style={{ width: 280 }}
          />
        </Form.Item>

        <Form.Item
          label="Minimum Latitude"
          name="min_latitude"
          rules={[{ required: true }]}
        >
          <InputNumber
            placeholder={`Allowed values between ${latitudeBounds.min} and ${latitudeBounds.max}`}
            {...latitudeBounds}
            style={{ width: 280 }}
          />
        </Form.Item>

        <Form.Item
          label="Maximum Longitude"
          name="max_longitude"
          rules={[{ required: true }]}
        >
          <InputNumber
            placeholder={`Allowed values between ${longitudeBounds.min} and ${longitudeBounds.max}`}
            {...longitudeBounds}
            style={{ width: 280 }}
          />
        </Form.Item>

        <Form.Item
          label="Maximum Latitude"
          name="max_latitude"
          rules={[{ required: true }]}
        >
          <InputNumber
            placeholder={`Allowed values between ${latitudeBounds.min} and ${latitudeBounds.max}`}
            {...latitudeBounds}
            style={{ width: 280 }}
          />
        </Form.Item>

        <Form.Item>
          <Button disabled={error.show} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {error.show && (
        <div data-testid="error" className="error">
          {error.msg}
        </div>
      )}
    </>
  );
};

export default FormComponent;
