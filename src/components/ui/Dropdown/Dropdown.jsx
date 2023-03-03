import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { Button } from 'components/ui/Button';
import './style.css';

function Dropdown({
  icon,
  labelText,
  contentElement,
  className,
  showContent,
  selfClose,
  onClick,
  children,
}) {
  const [isActive, setIsActive] = useState(showContent);
  const dropContainerRef = useRef(null);
  const dropMenuRef = useRef();

  const handleClick = () => {
    if (isActive === 'show-content') {
      setIsActive('hidden');
    } else {
      setIsActive('show-content');
    }
  };

  // Dropdown closes when user clicks outside
  const collapseDropdown = (e) => {
    if (
      dropContainerRef.current &&
      isActive &&
      !dropContainerRef.current.contains(e.target)
    ) {
      setIsActive('hidden');
    }
  };
  if (selfClose) {
    document.addEventListener('mousedown', collapseDropdown);
  }

  // Dropdown closes when current location changes
  const location = useLocation();
  useEffect(() => {
    setIsActive('hidden');
  }, [location]);

  return (
    <div className={`dropdown-container ${className}`} ref={dropContainerRef}>
      <Button className="dropdown" onClick={onClick || handleClick}>
        <div className="dropdown-label">
          {icon && icon}
          {contentElement && contentElement}
          {labelText !== '' && (
            <span className="dropdown-text">{labelText}</span>
          )}
        </div>
        {(labelText !== '' || contentElement) &&
        (showContent === 'show-content' || isActive === 'show-content') ? (
          <span className="dropdown-arrow">
            <SlArrowUp />
          </span>
        ) : (
          <span className="dropdown-arrow">
            <SlArrowDown />
          </span>
        )}
      </Button>
      <div className={onClick ? showContent : isActive} ref={dropMenuRef}>
        {children}
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  icon: PropTypes.element,
  labelText: PropTypes.string,
  contentElement: PropTypes.node,
  className: PropTypes.string,
  showContent: PropTypes.oneOf(['show-content', 'hidden']),
  selfClose: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Dropdown.defaultProps = {
  icon: null,
  labelText: '',
  contentElement: null,
  className: '',
  showContent: 'hidden',
  selfClose: false,
  onClick: null,
};

export default Dropdown;
