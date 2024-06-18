import React, { useEffect, useState } from 'react';
import '../App.css';
import { Table } from 'antd';

const PaginationSortFilterAnt = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setDataSource(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // useEffect(() => {
  //   console.log('>>> page:', page);
  //   console.log('>>> page size:', pageSize);
  // }, [page, pageSize]);

  const columns = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: '2',
      title: 'User ID',
      dataIndex: 'userId',
      sorter: (record1, record2) => {
        return record1.userId - record2.userId;
      },
    },
    {
      key: '3',
      title: 'Completed',
      dataIndex: 'completed',
      render: (completed) => {
        return <p>{completed ? 'Completed' : 'In Progress'}</p>;
      },
      filters: [
        { text: 'Completed', value: true },
        { text: 'In Progess', value: false },
      ],
      onFilter: (value, record) => {
        return record.completed === value;
      },
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        pagination={{
          pageSize: pageSize,
          current: page,
          onChange: (page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          },
        }}
      ></Table>
    </>
  );
};

export default PaginationSortFilterAnt;
