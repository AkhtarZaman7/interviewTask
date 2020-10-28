import React, { useState } from 'react';
import { Radio } from 'antd';
import styled from 'styled-components';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { Menu, Dropdown } from 'antd';
import { Modal, Button } from 'antd';
import { Input } from 'antd';
const TaskMenu = styled.div`
  /* border: 1px solid grey; */
  margin-top: 100px;
  margin-right: 40px;
`;
export default function Task(props) {
  const {
    value,
    listOfCanceledTasks,
    setListOfCanceledTasks,
    listOfTasks,
    setListOfTasks,
    isCancelled = false,
  } = props;

  const [visible, setVisible] = useState(false);

  const [isChecked, setIsChecked] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [modelTitle, setModelTitle] = useState(value.task);
  const [modelDescription, setModelDescription] = useState(value.description);

  const cancelItem = () => {
    setListOfTasks(listOfTasks.filter((item) => item.id !== value.id));
    setListOfCanceledTasks([...listOfCanceledTasks, value]);
  };
  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
    setListOfTasks(
      listOfTasks.map((item) => {
        if (item.id === value.id) {
          return {
            id: value.id,
            task: modelTitle,
            description: modelDescription,
          };
        } else {
          return item;
        }
      })
    );
    setModelDescription('');
    setModelTitle('');
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
    setModelDescription('');
    setModelTitle('');
  };
  const MyMenu = () => (
    <TaskMenu>
      <Menu>
        <Menu.Item
          key='1'
          style={{ border: '1px solid grey' }}
          onClick={() => {
            setShowMenu(!showMenu);
            setVisible(true);
          }}
        >
          Update Task
        </Menu.Item>
        <Menu.Item
          key='2'
          style={{ border: '1px solid grey' }}
          onClick={() => {
            cancelItem();
            setShowMenu(!showMenu);
          }}
        >
          Cancel
        </Menu.Item>
      </Menu>
    </TaskMenu>
  );
  return (
    <Container>
      <Radio
        checked={isChecked}
        onClick={() => {
          setIsChecked(!isChecked);
        }}
      />
      <div style={{ width: '100%', flexDirection: 'column' }}>
        {isCancelled ? (
          <PTagDel>{value?.task}</PTagDel>
        ) : (
          <PTag>{value?.task}</PTag>
        )}

        {value?.description && isCancelled && (
          <DescriptionDel>{value?.description}</DescriptionDel>
        )}
        {value?.description && !isCancelled && (
          <Description>{value?.description}</Description>
        )}
      </div>
      {showMenu && <MyMenu />}
      {!isCancelled && (
        <BiDotsVerticalRounded
          size={24}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
      )}

      <Modal
        title='Basic Modal'
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          placeholder='Enter title'
          style={{ margin: 10 }}
          value={modelTitle}
          onChange={(e) => {
            setModelTitle(e.target.value);
          }}
        />
        <Input
          placeholder='Add description'
          style={{ margin: 10 }}
          value={modelDescription}
          onChange={(e) => {
            setModelDescription(e.target.value);
          }}
        />
      </Modal>
    </Container>
  );
}
const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid #eaeaea;
  &:hover {
    border-bottom: 2px solid blue;
  }
`;
const PTag = styled.p`
  border: none;
  width: 100%;
  /* margin-top: 15px; */
  font-weight: bold;
  margin: 0px;

  :focus {
    border-top: none;
    border-right: none;
  }
`;

const Description = styled.p`
  font-size: 10;
  margin: 0px;
`;

const PTagDel = styled.del`
  border: none;
  width: 100%;
  /* margin-top: 15px; */
  font-weight: bold;
  margin: 0px;
  &:hover {
    border-bottom: ${({ hasDescription }) =>
      hasDescription ? 'none' : '2px solid blue'};
  }
  :focus {
    border-top: none;
    border-right: none;
  }
`;
const DescriptionDel = styled.del`
  font-size: 10;
  margin: 0px;
`;
