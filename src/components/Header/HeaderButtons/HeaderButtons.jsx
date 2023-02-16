import PropTypes from 'prop-types';
import { Button } from 'components/ui/Button';
import './style.css';

export default function HeaderButtons({ userID }) {
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
