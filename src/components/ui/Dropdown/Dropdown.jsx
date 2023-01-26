import PropTypes from 'prop-types';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { Button } from 'components/ui/Button';
import { useRef, useState } from 'react';
import './style.css';

function Dropdown({
  icon,
  labelText,
  showContent,
  selfClose,
  onClick,
  children,
}) {
  const [isActive, setIsActive] = useState(showContent);
  const handleClick = () => {
    if (isActive === 'show-content') {
      setIsActive('hidden');
    } else {
      setIsActive('show-content');
    }
  };

  // Dropdown closes when user clicks outside
  const dropdownRef = useRef(null);
  const collapseDropdown = (e) => {
    if (
      dropdownRef.current &&
      isActive &&
      !dropdownRef.current.contains(e.target)
    ) {
      setIsActive('hidden');
    }
  };
  if (selfClose) {
    document.addEventListener('mousedown', collapseDropdown);
  }

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <Button className="dropdown" onClick={onClick || handleClick}>
        {icon && icon}
        {labelText !== '' && <span className="dropdown-text">{labelText}</span>}
        {labelText !== '' &&
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
      <div className={onClick ? showContent : isActive}>{children}</div>
    </div>
  );
}

Dropdown.propTypes = {
  icon: PropTypes.node,
  labelText: PropTypes.string,
  showContent: PropTypes.oneOf(['show-content', 'hidden']),
  selfClose: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Dropdown.defaultProps = {
  icon: null,
  labelText: '',
  showContent: 'hidden',
  selfClose: false,
  onClick: null,
};

export default Dropdown;
