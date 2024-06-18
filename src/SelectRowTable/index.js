import React, { useState } from 'react';
import '../App.css';
import { Table, Tag } from 'antd';

const SelectRowTableAnt = () => {
  const [alreadySelected, setAlreadySelected] = useState(['1']);

  const columns = [
    {
      key: '1',
      title: 'Student ID',
      dataIndex: 'id',
    },
    {
      key: '2',
      title: 'Student Name',
      dataIndex: 'name',
    },
    {
      key: '3',
      title: 'Grade',
      dataIndex: 'grade',
      render: (tag) => {
        const color = tag.includes('A')
          ? 'Green'
          : tag.includes('B')
          ? 'Blue'
          : 'Red';
        return (
          <Tag color={color} key={tag}>
            {tag}
          </Tag>
        );
      },
    },
  ];

  const dataSource = [
    {
      key: '1',
      id: 1,
      name: 'Student Name 1',
      grade: 'A',
    },
    {
      key: '2',
      id: 2,
      name: 'Student Name 2',
      grade: 'A+',
    },
    {
      key: '3',
      id: 3,
      name: 'Student Name 3',
      grade: 'B',
    },
    {
      key: '4',
      id: 4,
      name: 'Student Name 4',
      grade: 'C',
    },
    {
      key: '5',
      id: 5,
      name: 'Student Name 5',
      grade: 'A',
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowSelection={{
          type: 'checkbox',
          selectedRowKeys: alreadySelected,
          onChange: (keys) => {
            setAlreadySelected(keys);
          },
          onSelect: (record) => {
            console.log(record);
          },
          getCheckboxProps: (record) => ({
            // disabled: record.grade === 'C',
          }),
          // hideSelectAll: true,
          selections: [
            Table.SELECTION_NONE,
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            {
              key: 'event',
              text: 'Select Even Rows',
              onSelect: (allKeys) => {
                const selectedKeys = allKeys.filter((key) => {
                  return key % 2 === 0;
                });
                setAlreadySelected(selectedKeys);
              },
            },
            {
              key: 'excellent',
              text: 'Select Students with Excellent Grade',
              onSelect: (allKeys) => {
                const selectedKeys = allKeys.filter((key) => {
                  return dataSource.find((student) => {
                    return student.key === key && student.grade.includes('A');
                  });
                });
                setAlreadySelected(selectedKeys);
              },
            },
          ],
        }}
      ></Table>
    </>
  );
};

export default SelectRowTableAnt;
