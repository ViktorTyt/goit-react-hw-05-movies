import { useEffect, useState } from 'react';

export const SearchBar = ({ query, onChange, onSubmit }) => {
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={({ target: { value } }) => onChange(value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
