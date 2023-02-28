import PropTypes from 'prop-types';
import './style.css';

export default function HeaderButtons({ userID, showOverlay }) {
  const handleClick = (e) => {
    showOverlay(e.target.value);
  };
  if (userID === 'guest') {
    return (
      <div className="header-buttons">
        <button
          className="signup-button"
          type="button"
          value="signup"
          onClick={handleClick}
        >
          Sign Up
        </button>
        <button
          className="login-button"
          type="button"
          value="login"
          onClick={handleClick}
        >
          Log In
        </button>
      </div>
    );
  }
}

HeaderButtons.propTypes = {
  userID: PropTypes.string,
  showOverlay: PropTypes.func.isRequired,
};

HeaderButtons.defaultProps = {
  userID: 'guest',
};
