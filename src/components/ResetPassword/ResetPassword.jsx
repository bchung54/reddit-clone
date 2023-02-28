import SnooIcon from 'assets/images/snoo-icon.png';
import { Link, useLocation } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useAuth } from 'contexts/AuthContext';
import './style.css';
import PropTypes from 'prop-types';
import { Button } from 'components/ui/Button';

function ResetPassword({ onClose, switchOverlay }) {
  const usernameRef = useRef();
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const page = useLocation().pathname === '/account/password';
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setError();
      setMessage();
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your email inbox for further instructions');
    } catch {
      setError('Failed to reset password');
    }
    setLoading(false);
  }
  const handleSwitch = (e) => {
    switchOverlay(e.target.value);
  };
  return (
    <div className="reset-password auth-card">
      {page && (
        <div className="snoo-icon">
          <img src={SnooIcon} alt="Snoo-Icon" />
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <h1>Reset your password</h1>
        <p>
          Tell us the username and email address associated with your Reddit
          account, and we&apos;ll send you an email with a link to reset your
          password.
        </p>
        {error && <div className="error">{error}</div>}
        {message && <div className="message">{message}</div>}
        <input type="text" ref={usernameRef} placeholder="Username" />
        <input type="email" ref={emailRef} placeholder="Email Address" />
        <input type="submit" value="Reset Password" disabled={loading} />
        {page ? (
          <Link to="/account/username" className="footnote">
            Forgot Username?
          </Link>
        ) : (
          <div>
            Forget your{' '}
            <button type="button" value="username" onClick={handleSwitch}>
              username
            </button>
            ?
          </div>
        )}
        <div className="footnote">
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

ResetPassword.propTypes = {
  onClose: PropTypes.func,
  switchOverlay: PropTypes.func,
};

ResetPassword.defaultProps = {
  onClose: null,
  switchOverlay: null,
};

export default ResetPassword;
