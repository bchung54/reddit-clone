import { Link, useLocation } from 'react-router-dom';
import { useOverlay } from 'contexts/OverlayContext';
import { Button } from 'components/ui/Button';
import SnooIcon from 'assets/images/snoo-icon.png';

function RecoverUsername() {
  const { setOverlay } = useOverlay();
  // const [loading, setLoading] = useState();
  const page = useLocation().pathname === '/account/username';
  const handleSwitch = (e) => {
    setOverlay(e.target.value);
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
        <Button
          className="close"
          onClick={() => {
            setOverlay(null);
          }}
        >
          X
        </Button>
      )}
    </div>
  );
}

export default RecoverUsername;
