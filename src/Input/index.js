import React from 'react';
import '../App.css';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const InputAnt = () => {
  return (
    <div>
      <Input.Search
        placeholder="Name"
        maxLength={10}
        prefix={<UserOutlined />}
        style={{ width: '600px' }}
        allowClear
      ></Input.Search>
    </div>
  );
};

export default InputAnt;
