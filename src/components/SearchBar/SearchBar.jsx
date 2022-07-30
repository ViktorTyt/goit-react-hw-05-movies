import { useEffect, useState } from 'react';
import { Form, Button } from './SearchBar.styled';

export const SearchBar = ({ query, onChange, onSubmit }) => {
  return (
    <div>
      <Form action="" onSubmit={onSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={({ target: { value } }) => onChange(value)}
        />
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
};
