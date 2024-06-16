import React from 'react';
import '../App.css';
import { Button } from 'antd';
import { useState } from 'react';
import { PoweroffOutlined } from '@ant-design/icons';

const ButtonAnt = () => {
  const [loading, setLoading] = useState(false);

  const onClickButton = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <Button
        block
        type="primary"
        loading={loading}
        onClick={onClickButton}
        icon={<PoweroffOutlined />}
        className="my-button"
      >
        hello my button
      </Button>
    </div>
  );
};

export default ButtonAnt;
