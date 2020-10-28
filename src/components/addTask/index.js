import React, { useState } from 'react';
import { Radio } from 'antd';
import styled from 'styled-components';
import { BiDotsVerticalRounded } from 'react-icons/bi';
const Container = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid #eaeaea;
`;
const Input = styled.input`
  border: none;
  width: 100%;
  margin-top: 5px;
  &:hover {
    border-bottom: 2px solid blue;
  }
  :focus {
    border-top: none;
    border-right: none;
  }
`;

export default function AddTak(props) {
  const { listOfTasks, setListOfTasks } = props;
  const [inputValue, setInputValue] = useState('');

  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (inputValue.trim() !== '') {
        setListOfTasks([
          ...listOfTasks,
          {
            id: Math.random().toString(),
            task: inputValue,
            description: '',
          },
        ]);
        setInputValue('');
      }
    }
  };

  return (
    <Container>
      <Input
        onKeyDown={_handleKeyDown}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder='Add a task'
      />
    </Container>
  );
}
