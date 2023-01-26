import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function FilterBar({ sorting, activeIndex }) {
  const [active, setActive] = useState(activeIndex);
  return (
    <div className="filter-bar">
      <div className="filters">
        {sorting.map((filter, index) => {
          let icon;
          switch (filter) {
            case 'hot':
              icon = ['fas', 'fa-fire-flame-simple'];
              break;
            case 'new':
              icon = ['far', 'fa-sun'];
              break;
            case 'top':
              icon = ['fas', 'fa-ranking-star'];
              break;
            case 'rising':
              icon = ['fas', 'fa-arrow-trend-up'];
              break;
            default:
          }
          return (
            <Link
              className={
                index === active ? 'filter-button active' : 'filter-button'
              }
              to={`${filter}/`}
              onClick={() => setActive(index)}
              key={filter}
            >
              <FontAwesomeIcon icon={icon} className="icon" />
              <span>{filter[0].toUpperCase() + filter.slice(1)}</span>
            </Link>
          );
        })}
      </div>
      <div className="layout-dropdown">
        <FontAwesomeIcon icon={['fas', 'fa-bars']} />
        <FontAwesomeIcon icon={['fas', 'fa-chevron-down']} />
      </div>
    </div>
  );
}

FilterBar.propTypes = {
  sorting: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeIndex: PropTypes.number.isRequired,
};

export default FilterBar;
