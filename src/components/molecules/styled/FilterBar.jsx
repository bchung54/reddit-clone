import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../styles/molecules/filterBar.css';

function FilterBar({ guest }) {
  return (
    <div className="filter-bar">
      <div className="filters">
        {!guest && (
          <a className="filter-button" href="/best/">
            <FontAwesomeIcon icon={['fas', 'fa-rocket']} />
            <span>Best</span>
          </a>
        )}
        <a className="filter-button" href="/hot/">
          <FontAwesomeIcon icon={['fas', 'fa-fire-flame-simple']} />
          <span>Hot</span>
        </a>
        {guest && (
          <div className="country-filter">
            <span>Everywhere</span>
            <FontAwesomeIcon icon={['fas', 'fa-chevron-down']} />
          </div>
        )}
        <a className="filter-button" href="/new/">
          <FontAwesomeIcon icon={['far', 'fa-sun']} />
          <span>New</span>
        </a>
        <a className="filter-button" href="/top/">
          <FontAwesomeIcon icon={['fas', 'fa-ranking-star']} />
          <span>Top</span>
        </a>
        <a className="filter-button" href="/rising/">
          <FontAwesomeIcon icon={['fas', 'fa-arrow-trend-up']} />
          <span>Rising</span>
        </a>
      </div>
      <div className="layout-dropdown">
        <FontAwesomeIcon icon={['fas', 'fa-bars']} />
        <FontAwesomeIcon icon={['fas', 'fa-chevron-down']} />
      </div>
    </div>
  );
}

FilterBar.propTypes = {
  guest: PropTypes.bool.isRequired,
};

export default FilterBar;
