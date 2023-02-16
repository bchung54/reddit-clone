import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

export default function FilterBar({
  root,
  sortByList,
  activeIndex,
  updatePostsSection,
}) {
  return (
    <div className="filter-bar">
      <div className="filters">
        {sortByList.map((filter, index) => {
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
                index === activeIndex ? 'filter-button active' : 'filter-button'
              }
              to={`${root}${filter}/`}
              onClick={() => {
                updatePostsSection(index);
              }}
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
  root: PropTypes.string.isRequired,
  sortByList: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeIndex: PropTypes.number.isRequired,
  updatePostsSection: PropTypes.func.isRequired,
};
