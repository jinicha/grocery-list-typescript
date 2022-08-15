import React from 'react';
import GroceryList from './GroceryList';

export default function App() {
  return (
    <div className="App">
      <h1>Grocery List</h1>
      <GroceryList list={['peach', 'orange', 'mango', 'apple']} />
    </div>
  );
}
