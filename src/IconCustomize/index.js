import React from 'react';
import '../App.css';
import Icon, {
  PieChartFilled,
  AppleFilled,
  LoadingOutlined,
  BankTwoTone,
  LogoutOutlined,
} from '@ant-design/icons';
import { Divider, Button } from 'antd';

const IconAnt = () => {
  const HeartIcon = (props) => {
    return (
      <Icon
        component={() => {
          return (
            <svg
              width="100"
              height="100"
              viewBox="0 0 15 15"
              version="1.1"
              id="heart"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.91,6.75c-1.17,2.25-4.3,5.31-6.07,6.94c-0.1903,0.1718-0.4797,0.1718-0.67,0C5.39,12.06,2.26,9,1.09,6.75&#xA;&#x9;C-1.48,1.8,5-1.5,7.5,3.45C10-1.5,16.48,1.8,13.91,6.75z"
              />
            </svg>
          );
        }}
        {...props}
      />
    );
  };

  return (
    <div>
      <PieChartFilled style={{ color: 'purple', fontSize: 100 }} />
      <PieChartFilled rotate={45} style={{ color: 'orange', fontSize: 100 }} />
      <AppleFilled style={{ color: 'green', fontSize: 100 }} />
      <LoadingOutlined style={{ color: 'red', fontSize: 100 }} />
      <BankTwoTone twoToneColor="green" style={{ fontSize: 100 }} />
      <Divider />
      <HeartIcon style={{ color: 'red', fontSize: 10 }} />
      <Divider />
      <Button icon={<LogoutOutlined style={{ color: 'red', fontSize: 14 }} />}>
        Button with custom icon
      </Button>
    </div>
  );
};

export default IconAnt;
