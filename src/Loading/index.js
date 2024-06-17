import React, { useState } from 'react';
import '../App.css';
import { Spin, Button } from 'antd';

const LoadingAnt = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <Spin spinning={loading} />
      <Button onClick={() => setLoading((preValue) => !preValue)}>
        Toggle spining
      </Button>
    </div>
  );
};

export default LoadingAnt;
