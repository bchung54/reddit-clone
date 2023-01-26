import PropTypes from 'prop-types';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import './style.css';

function SearchBar({ placeholderText }) {
  return (
    <div className="search-bar">
      <form autoComplete="off">
        <label htmlFor="header-search-bar">
          <HiOutlineMagnifyingGlass className="icon" />
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
