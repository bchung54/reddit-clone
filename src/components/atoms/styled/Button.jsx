import PropTypes from 'prop-types';
import '../../../styles/atoms/button.css';

function Button({ className, children }) {
  return (
    <button className={`${className}-button`} type="button">
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default Button;
