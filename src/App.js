import React, { useState } from 'react';
import "./App.css";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    setListTodo([...listTodo, inputText]);
  }

  const deleteListItem = (index) => {
    const updatedList = [...listTodo];
    updatedList.splice(index, 1);
    setListTodo(updatedList);
  };

  return (
    <div className='main-container'>
      <div className='center-container'>
        <TodoInput addList={addList}/>
        <h1 className='app-heading'>
          Todo
        </h1>
        {listTodo.map((listItem, i) => (
          <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
        ))}
      </div>
    </div>
  )
}

export default App;
