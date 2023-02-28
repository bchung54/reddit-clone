import { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';
import PropTypes from 'prop-types';
import { Button } from 'components/ui/Button';

export function LogIn({ onClose, switchOverlay }) {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const page = useLocation().pathname.startsWith('/account/login');
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setError();
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      if (page) {
        navigate('/');
      } else {
        navigate(0);
      }
    } catch {
      setError('Failed to log in');
    }

    setLoading(false);
  }

  const handleSwitch = (e) => {
    switchOverlay(e.target.value);
  };

  return (
    <div className="log-in auth-card">
      <form onSubmit={handleSubmit}>
        <h1 className="title">Log In</h1>
        <p className="user-agreement">
          By continuing, you are setting up a Reddit account and agree to our
          <a href="#0">User Agreement</a> and <a href="#0">Privacy Policy</a>.
        </p>
        {error && <div className="error">{error}</div>}
        <input
          id="login-email"
          type="email"
          ref={emailRef}
          placeholder="Email"
        />
        <input
          id="login-password"
          type="password"
          ref={passwordRef}
          placeholder="Password"
        />
        {page ? (
          <div className="login-recovery">
            Forget your <Link to="/account/username">username</Link> or{' '}
            <Link to="/account/password">password</Link> ?
          </div>
        ) : (
          <div className="login-recovery">
            Forget your{' '}
            <button type="button" value="username" onClick={handleSwitch}>
              username
            </button>{' '}
            or{' '}
            <button type="button" value="password" onClick={handleSwitch}>
              password
            </button>
            ?
          </div>
        )}
        <input type="submit" value="Log In" disabled={loading} />
      </form>
      <div className="footnote">
        New to Reddit?{' '}
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
LogIn.propTypes = {
  onClose: PropTypes.func,
  switchOverlay: PropTypes.func,
};

LogIn.defaultProps = {
  onClose: null,
  switchOverlay: null,
};

export default LogIn;
