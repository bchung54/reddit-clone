import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../styles/molecules/searchBar.css';

function SearchBar({ placeholderText }) {
  return (
    <div className="search-bar">
      <form autoComplete="off">
        <label htmlFor="header-search-bar">
          <FontAwesomeIcon
            className="icon"
            icon={['fas', 'fa-magnifying-glass']}
          />
          <input
            type="search"
            id="header-search-bar"
            placeholder={placeholderText}
          />
        </label>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  placeholderText: PropTypes.string.isRequired,
};

export default SearchBar;
