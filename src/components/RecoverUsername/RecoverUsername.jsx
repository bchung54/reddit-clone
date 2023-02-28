import SnooIcon from 'assets/images/snoo-icon.png';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'components/ui/Button';

function RecoverUsername({ onClose, switchOverlay }) {
  const page = useLocation().pathname === '/account/username';
  /*   const [loading, setLoading] = useState();
   */ const handleSwitch = (e) => {
    switchOverlay(e.target.value);
  };
  return (
    <div className="recover-username auth-card">
      <form>
        {page && (
          <div className="snoo-icon">
            <img src={SnooIcon} alt="Snoo-Icon" />
          </div>
        )}
        <h1>Recover your username</h1>
        <p>
          Tell us the email address associated with your Reddit account, and
          we&apos;ll send you an email with your username.
        </p>
        <input type="email" placeholder="Email Address" />
        <input type="submit" value="Email Me" /* disabled */ />
        <div>
          Don&apos;t have an email or need assistance logging in?{' '}
          <Link to="#0">Get Help</Link>
        </div>
      </form>
      <div className="footnote">
        {page ? (
          <Link to="/account/login">Log In</Link>
        ) : (
          <button type="button" value="login" onClick={handleSwitch}>
            Log In
          </button>
        )}
        <span className="text-divider">•</span>
        {page ? (
          <Link to="/account/signup">Sign Up</Link>
        ) : (
          <button type="button" value="signup" onClick={handleSwitch}>
            Sign Up
          </button>
        )}
      </div>
      {!page && (
        <Button className="close" onClick={onClose}>
          X
        </Button>
      )}
    </div>
  );
}

RecoverUsername.propTypes = {
  onClose: PropTypes.func,
  switchOverlay: PropTypes.func,
};

RecoverUsername.defaultProps = {
  onClose: null,
  switchOverlay: null,
};

export default RecoverUsername;
