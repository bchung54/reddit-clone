import { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';
import { useOverlay } from 'contexts/OverlayContext';
import { Button } from 'components/ui/Button';

export function LogIn() {
  // contexts
  const { login } = useAuth();
  const { setOverlay } = useOverlay();

  // navigation
  const navigate = useNavigate();
  const page = useLocation().pathname.startsWith('/account/login');

  // references
  const emailRef = useRef();
  const passwordRef = useRef();

  // states
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

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
    setOverlay(e.target.value);
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

export default LogIn;
