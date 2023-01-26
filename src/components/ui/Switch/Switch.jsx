import PropTypes from 'prop-types';
import './style.css';

function Switch({ name }) {
  const id = `${name}-switch`;
  return (
    <label className="switch" htmlFor={id}>
      <input type="checkbox" id={id} />
      <span className="slider round" />
    </label>
  );
}

Switch.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Switch;
