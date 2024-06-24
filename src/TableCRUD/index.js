import React, { useState } from 'react';
import '../App.css';
import { Button, Table, Modal, Input } from 'antd';

import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const TableCRUD = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: 'name 1',
      email: 'email 1',
      address: 'address 1',
    },
    {
      id: 2,
      name: 'name 2',
      email: 'email 2',
      address: 'address 2',
    },
    {
      id: 3,
      name: 'name 3',
      email: 'email 3',
      address: 'address 3',
    },
    {
      id: 4,
      name: 'name 4',
      email: 'email 4',
      address: 'address 4',
    },
  ]);

  const columns = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: '2',
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: '3',
      title: 'Email',
      dataIndex: 'email',
    },
    {
      key: '4',
      title: 'Address',
      dataIndex: 'address',
    },
    {
      key: '5',
      title: 'Action',
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditing(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: 'red', marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onAddStudent = () => {
    const randomNumber = parseInt(Math.random() * 100);
    const newStudent = {
      id: randomNumber,
      name: 'name ' + randomNumber,
      email: 'email ' + randomNumber,
      address: 'address ' + randomNumber,
    };
    setDataSource((pre) => [...pre, newStudent]);
  };

  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: 'Are you sure you want to delete?',
      okText: 'Yes',
      okType: 'danger',
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => {
            return student.id !== record.id;
          });
        });
      },
    });
  };

  const onEditing = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };

  return (
    <div>
      <Button onClick={onAddStudent}>Add New Student</Button>
      <Table dataSource={dataSource} columns={columns}></Table>
      <Modal
        title="Edit Student"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          setDataSource((pre) => {
            return pre.map((student) => {
              if (student.id === editingStudent.id) {
                return editingStudent;
              } else {
                return student;
              }
            });
          });
          resetEditing();
        }}
      >
        <Input
          value={editingStudent?.name}
          onChange={(e) => {
            setEditingStudent((pre) => {
              return { ...pre, name: e.target.value };
            });
          }}
        />
        <Input
          value={editingStudent?.email}
          onChange={(e) => {
            setEditingStudent((pre) => {
              return { ...pre, email: e.target.value };
            });
          }}
        />
        <Input
          value={editingStudent?.address}
          onChange={(e) => {
            setEditingStudent((pre) => {
              return { ...pre, address: e.target.value };
            });
          }}
        />
      </Modal>
    </div>
  );
};

export default TableCRUD;
