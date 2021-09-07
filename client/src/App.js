import "./App.css";
import "antd/dist/antd.css";
import { useState } from "react";

import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Layout,
  Card,
  Space,
  Select,
} from "antd";

const { Option } = Select;
function App() {
  return (
    <Layout
      style={{ paddingTop: "5rem", paddingLeft: "5rem", paddingRight: "5rem" }}
    >
      <Row>
        <Col span={12} style={{ paddingRight: "5rem" }}>
          <SubmitForm />
        </Col>
        <Col span={12}></Col>
      </Row>
    </Layout>
  );
}

export default App;

const SubmitForm = () => {
  const [state, setState] = useState({
    amount: "",
    userId: "",
    ratedAmount: "",
    selectedCountry: "USD",
  });
  const countries = [
    {
      name: "USD",
      rate: 0.05,
    },
    {
      name: "EUR",
      rate: 0.07,
    },
    {
      name: "RWF",
      rate: 0.03,
    },
    {
      name: "POUND",
      rate: 0.08,
    },
  ];

  console.log(state);

  const onChangeCountry = (value) => {
    setState({
      ...state,
      selectedCountry: value,
    });
  };

  const onchangeHandler = (event) => {
    const enteredAmount = event.target.value;
    console.log(enteredAmount);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Card hoverable>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size="large"
      >
        <label>You send</label>
        <Form.Item
          name="youSend"
          rules={[{ required: true, message: "Please input  an amount!" }]}
        >
          <Space>
            <Input
              size="large"
              style={{ width: "35rem" }}
              value={state.amount}
              onChange={onchangeHandler}
            />
            <Select
              size="large"
              value={state.selectedCountry}
              onChange={onChangeCountry}
              style={{ width: "11rem" }}
            >
              {countries.map((el, index) => (
                <Option key={index} value={el.name}>
                  {el.name}
                </Option>
              ))}
            </Select>
          </Space>
        </Form.Item>

        <label>Collect</label>
        <Form.Item
          name="collect"
          rules={[{ required: true, message: "Please input an amount!" }]}
        >
          <Space>
            <Input
              size="large"
              style={{ width: "35rem" }}
              value={state.ratedAmount}
            />
            <Select
              size="large"
              onChange={onChangeCountry}
              value={state.selectedCountry}
              style={{ width: "11rem" }}
            >
              {countries.map((el, index) => (
                <Option key={index} value={el.name}>
                  {el.name}
                </Option>
              ))}
            </Select>
          </Space>
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          style={{ width: "100%" }}
        >
          Send now
        </Button>
      </Form>
    </Card>
  );
};
