import React from 'react';

interface GroceryEntryProps {
  item: string;
  remove(item: string): void;
}

export default function GroceryEntry({ item, remove }: GroceryEntryProps) {
  return (
    <div onClick={() => remove(item)} aria-hidden="true">{item}</div>
  );
}
