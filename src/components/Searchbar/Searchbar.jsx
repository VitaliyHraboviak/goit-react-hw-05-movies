import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css'

const Searchbar = ({ onSearch }) => {
  const [searchRequest, setSearchRequest] = useState('');

  const handleRequestChange = event => {
    setSearchRequest(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchRequest.trim() === '') {
      alert('Search field is empty!');
      return;
    }
    onSearch(searchRequest);
    setSearchRequest('');
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={styles.formed}>
        <input
          type="text"
          name="searchRequest"
          value={searchRequest}
          onChange={handleRequestChange}
          autoComplete="off"
          autoFocus
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Searchbar;