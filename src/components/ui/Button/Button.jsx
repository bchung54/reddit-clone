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
      className={className ? `${className}-button` : className}
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

Button.defaultProps = {
  className: '',
  onClick: null,
};

export default Button;
