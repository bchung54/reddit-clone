import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar() {
  return (
    <div className="search-dropdown">
      <form autoComplete="off">
        <label htmlFor="header-search-bar">
          <FontAwesomeIcon
            className="icon"
            icon={["fas", "fa-magnifying-glass"]}
          />
          <input type="search" id="header-search-bar" />
        </label>
      </form>
    </div>
  );
}

export default SearchBar;
