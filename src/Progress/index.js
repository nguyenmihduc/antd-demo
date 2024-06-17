import React from 'react';
import '../App.css';
import { Progress } from 'antd';

const ProgressgAnt = () => {
  return (
    <>
      <Progress percent={33} status="active" />
      <Progress percent={33} type="circle" strokeColor="red" />
      <Progress percent={33} type="circle" status="success" />
      <Progress percent={33} type="circle" status="exception" />
      <Progress percent={33} type="circle" />
      <Progress percent={33} type="line" strokeWidth={30} status="success" />
      <Progress percent={33} status="active" steps={3} />
    </>
  );
};

export default ProgressgAnt;
