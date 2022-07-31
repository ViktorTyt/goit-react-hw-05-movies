import PropTypes from 'prop-types';
import { Button, Form } from './SearchBar.styled';

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

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
