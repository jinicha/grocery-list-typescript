import React, { useState } from 'react';
import AddItem from './AddItem';
import GroceryList from './GroceryList';

export default function App() {
  const [list, setList] = useState(['peach', 'orange', 'mango', 'apple']);

  const add = (item: string) => {
    setList([...list, item]);
  };

  const remove = (item: string) => {
    const itemIndex = list.indexOf(item);
    const temp = list.slice();
    temp.splice(itemIndex, 1);
    setList(temp);
  };

  return (
    <div>
      <h1>Grocery List</h1>
      <AddItem add={add} />
      <GroceryList list={list} remove={remove} />
    </div>
  );
}
