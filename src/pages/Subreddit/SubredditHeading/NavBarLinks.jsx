import PropTypes from 'prop-types';
import { useState } from 'react';

export default function NavBarLinks({ navbarLinks }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const renderedLinks = navbarLinks.map((link, index) => {
    const showActive = index === activeIndex ? 'active' : '';
    const handleClick = () => {
      setActiveIndex(index);
    };
    return (
      <a href="#0" key={link} className={showActive} onClick={handleClick}>
        {link}
      </a>
    );
  });
  return <div className="navbar">{renderedLinks}</div>;
}

NavBarLinks.propTypes = {
  navbarLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
};
