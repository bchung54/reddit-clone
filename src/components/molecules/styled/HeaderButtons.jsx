import PropTypes from 'prop-types';
import Button from '../../atoms/styled/Button';
import '../../../styles/molecules/headerButtons.css';

function HeaderButtons({ userID }) {
  if (userID === 'guest') {
    return (
      <div className="header-buttons">
        <Button className="signup">Sign Up</Button>
        <Button className="login">Log In</Button>
      </div>
    );
  }
}

HeaderButtons.propTypes = {
  userID: PropTypes.string,
};

HeaderButtons.defaultProps = {
  userID: 'guest',
};

export default HeaderButtons;
