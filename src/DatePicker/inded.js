import React from 'react';
import '../App.css';
import { DatePicker, TimePicker } from 'antd';

const DatePickerAnt = () => {
  return (
    <div>
      <DatePicker picker="quarter" />
      <DatePicker.RangePicker picker="month" />
      <TimePicker></TimePicker>
    </div>
  );
};

export default DatePickerAnt;
