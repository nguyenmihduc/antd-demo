import React from 'react';
import '../App.css';
import { Table } from 'antd';

const TableAnt = () => {
  const datas = [
    {
      name: 'name 1',
      age: 10,
      address: 'address 1',
      key: '1',
    },
    {
      name: 'name 2',
      age: 20,
      address: 'address 2',
      key: '2',
    },
    {
      name: 'name 3',
      age: 30,
      address: 'address 3',
      key: '3',
    },
    {
      name: 'name 4',
      age: 40,
      address: 'address 4',
      key: '4',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'key',
      render: (name) => {
        return <a href="https://www.google.com/">{name}</a>;
      },
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'key',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'key',
    },
    {
      title: 'Graduated',
      key: 'key',
      render: (payload) => {
        return <p>{payload.age > 20 ? 'True' : 'False'}</p>;
      },
    },
  ];
  return (
    <div>
      <Table dataSource={datas} columns={columns}></Table>
    </div>
  );
};

export default TableAnt;
