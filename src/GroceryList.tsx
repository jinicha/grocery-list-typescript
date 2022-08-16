import React from 'react';
import GroceryEntry from './GroceryEntry';

interface GroceryListProps {
  list: string[];
  remove(item: string): void;
}

export default function GroceryList({ list, remove }: GroceryListProps) {
  return (
    <div>
      {list.map((item) => (
        <GroceryEntry item={item} remove={remove} />
      ))}
    </div>
  );
}
