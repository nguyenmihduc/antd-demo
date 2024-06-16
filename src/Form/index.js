import React from 'react';
import '../App.css';
import { Button, Form, Input } from 'antd';

const FormAnt = () => {
  const onFinish = (e) => {
    console.log(e);
  };

  return (
    <div>
      <Form onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="usename"
          style={{ color: 'white' }}
          required
        >
          <Input placeholder="Username" required></Input>
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          style={{ color: 'white' }}
          required
        >
          <Input.Password placeholder="Password" required></Input.Password>
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormAnt;
