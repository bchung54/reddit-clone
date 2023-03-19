import { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';
import { useOverlay } from 'contexts/OverlayContext';
import { Button } from 'components/ui/Button';

function SignUp() {
  // contexts
  const { signup, updateUsername } = useAuth();
  const { setOverlay } = useOverlay();

  // navigation
  const navigate = useNavigate();
  const page = useLocation().pathname === '/account/signup';

  // references
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  // states
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (passwordRef.current.value.length < 6) {
      return setError('Password must be 6 characters or longer');
    }
    try {
      setError();
      setLoading(true);
      const userCredential = await signup(
        emailRef.current.value,
        passwordRef.current.value
      ).catch();
      await updateUsername(userCredential.user, {
        displayName: usernameRef.current.value,
      }).catch();
      if (page) {
        navigate('/');
      } else {
        navigate(0);
      }
    } catch {
      setError('Failed to create an account');
    }
    return setLoading(false);
  }
  const handleSwitch = (e) => {
    setOverlay(e.target.value);
  };
  return (
    <div className="sign-up auth-card">
      <form onSubmit={handleSubmit}>
        <h1 className="title">Sign Up</h1>
        <p className="user-agreement">
          By continuing, you are setting up a Reddit account and agree to our{' '}
          <a href="#0">User Agreement</a> and <a href="#0">Privacy Policy</a>.
        </p>
        {error && <div className="error">{error}</div>}
        <input
          id="registration-email"
          type="email"
          ref={emailRef}
          placeholder="Email"
        />
        <input
          id="registration-username"
          type="text"
          ref={usernameRef}
          placeholder="Username"
        />
        <input
          id="registration-password"
          type="password"
          ref={passwordRef}
          placeholder="Password"
        />
        <input type="submit" value="Continue" disabled={loading} />
      </form>
      <div className="footnote">
        Already a redditor?
        {page ? (
          <Link to="/account/login">Log In</Link>
        ) : (
          <button type="button" value="login" onClick={handleSwitch}>
            Log In
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

export default SignUp;
