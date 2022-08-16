import React, { useState } from 'react';

interface AddItemProps {
  add(item: string): void;
}

export default function AddItem({ add }: AddItemProps) {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value);
  };

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (userInput) {
      add(userInput);
    }
    setUserInput('');
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Enter an item"
        value={userInput}
        onChange={handleChange}
      />
      <button
        type="submit"
        onClick={handleClick}
      >
        Add
      </button>
    </form>
  );
}
