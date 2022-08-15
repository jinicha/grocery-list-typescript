import React from 'react';
import GroceryEntry from './GroceryEntry';

interface AppProps {
  list: string[];
};

export default function GroceryList({ list }: AppProps) {
  return (
    <div>
      {list.map(item => (
        <GroceryEntry item={item} />
      ))}
    </div>
  );
};