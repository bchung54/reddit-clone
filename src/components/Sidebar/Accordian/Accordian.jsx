import { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'components/ui/Dropdown';
import {
  defaultTopics,
  defaultPopularCategories,
  defaultSubs,
} from 'data/defaultCategories';
import './style.css';

function Accordian({ heading }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const categories =
    heading === 'Topics' ? defaultTopics : defaultPopularCategories;
  const renderedListItems = categories.map((category, index) => {
    const showContent = index === activeIndex ? 'show-content' : 'hidden';
    const handleClick = () => {
      if (showContent === 'show-content') {
        setActiveIndex(-1);
        return;
      }
      setActiveIndex(index);
    };
    return (
      <Dropdown
        icon={category.icon}
        labelText={category.name}
        showContent={showContent}
        onClick={handleClick}
        key={category.name}
      >
        {defaultSubs.map((item) => {
          if (heading === 'Topics') {
            return (
              <div className="dropdown-list-item" key={item}>
                {item}
              </div>
            );
          }
          return (
            <span className="dropdown-list-item" key={item}>
              {item}
            </span>
          );
        })}
      </Dropdown>
    );
  });
  return (
    <div className="accordian">
      {heading === 'Topics' && <h4>{heading}</h4>}
      <div className={`${heading[0].toLowerCase()}${heading.slice(1)}-list`}>
        {renderedListItems}
      </div>
    </div>
  );
}
Accordian.propTypes = {
  heading: PropTypes.string,
};
Accordian.defaultProps = {
  heading: '',
};

export default Accordian;
