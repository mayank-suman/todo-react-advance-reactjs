"use client";
import React, { SyntheticEvent, useState } from 'react';

function TaskInput() {
  const [inputVal, setInputVal] = useState('');

  const onSubmit = (event:SyntheticEvent) => {
    console.log('event', event);
  }
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' value={inputVal} onChange={(e) => setInputVal(e.target.value)}   />
        <button type='submit' >Add</button>
      </form>
    </div>
  )
}

export default TaskInput