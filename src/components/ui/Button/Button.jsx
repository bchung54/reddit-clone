import PropTypes from 'prop-types';
import './style.css';

function Button({ className, onClick, children }) {
  return (
    <button className={`${className}-button`} type="button" onClick={onClick}>
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
