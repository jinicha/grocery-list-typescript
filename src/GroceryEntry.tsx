import React from 'react';

interface GroceryListProps {
  item: string;
}

export default function GroceryEntry({ item }: GroceryListProps) {
  return (
    <div>{item}</div>
  );
};