import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

export default function FilterBar({ sortByList }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sort');
  return (
    <div className="filter-bar">
      <div className="filters">
        {sortByList.map((filter) => {
          return (
            <Link
              className={`filter-button ${sortBy === filter ? 'active' : ''}`}
              to={`?sort=${filter}`}
              onClick={() => {
                setSearchParams({ sort: filter });
              }}
              key={filter}
            >
              <FontAwesomeIcon
                icon={
                  {
                    hot: ['fas', 'fa-fire-flame-simple'],
                    new: ['far', 'fa-sun'],
                    top: ['fas', 'fa-ranking-star'],
                    rising: ['fas', 'fa-arrow-trend-up'],
                  }[filter]
                }
                className="icon"
              />
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
  sortByList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
