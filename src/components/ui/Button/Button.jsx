import PropTypes from 'prop-types';
import './style.css';

function Button({ className, onClick, children }) {
  const handleClick = (e) => {
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  };
  return (
    <button
      className={`${className}-button`}
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

Button.defaultProps = {
  onClick: null,
};

export default Button;
