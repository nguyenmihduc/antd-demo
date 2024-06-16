import React from 'react';
import '../App.css';
import { Select } from 'antd';

const SelectAnt = () => {
  const fruits = ['Orange', 'Apple', 'Mango', 'Cherry'];

  return (
    <div>
      <p>Which are your favorite fruits?</p>
      <Select
        mode="multiple"
        placeholder="Select fruit"
        style={{ width: '100%' }}
        maxTagCount={2}
        allowClear
      >
        {fruits.map((fruit, index) => {
          return (
            <Select.Option key={index} value={fruit}>
              {fruit}
            </Select.Option>
          );
        })}
      </Select>
    </div>
  );
};

export default SelectAnt;
