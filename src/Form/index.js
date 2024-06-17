import React, { useState } from 'react';
import '../App.css';
import { Button, Form, Input, message, Alert } from 'antd';

const FormAnt = () => {
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const onFinish = (e) => {
    setLoading(true);
    console.log(e);

    setTimeout(() => {
      setLoading(false);
      setShowAlert(true);
      // message.success('Success!');
      message.warning('Login failed');
    }, 2000);
  };

  return (
    <div>
      {showAlert && (
        <Alert
          description="These was error on login"
          message="Error"
          type="error"
          closable
        />
      )}
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
          <Button block type="primary" htmlType="submit" loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormAnt;
