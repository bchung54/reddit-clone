import { useRef, useState } from 'react';
import { useAuth } from 'contexts/AuthContext';
import { Button } from 'components/ui/Button';
import { useOverlay } from 'contexts/OverlayContext';
import './style.css';

function UpdateEmail() {
  const { currentUser, updateEmailHook, reauthenticate } = useAuth();
  const { setOverlay } = useOverlay();
  const emailRef = useRef();
  const currPasswordRef = useRef();
  const [error, setError] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  function handleUpdateEmail(event) {
    event.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);
    reauthenticate(currPasswordRef.current.value)
      .then(() => {
        updateEmailHook(emailRef.current.value)
          .then(() => {
            setMessage('Email has been updated');
          })
          .catch(() => {
            setError('Failed to update email');
          });
      })
      .catch(() => {
        setMessage('Incorrect password entered');
      })
      .finally(() => {
        event.target.reset();
        setLoading(false);
      });
  }
  return (
    <div className="update-email auth-card">
      <form onSubmit={handleUpdateEmail}>
        <h2>Update your email</h2>
        <p>
          Update your email below. There will be a new verification email sent
          that you will need to use to verify this new email.
        </p>
        {error && <div className="error">{error}</div>}
        {message && <div className="message">{message}</div>}
        <input
          name="current-password"
          placeholder="current password"
          type="password"
          ref={currPasswordRef}
        />
        <input
          name="email"
          placeholder="new email"
          type="email"
          ref={emailRef}
          defaultValue={currentUser.email}
          required
        />
        <input type="submit" value="Save email" disabled={loading} />
      </form>
      <Button
        className="close"
        onClick={() => {
          setOverlay(null);
        }}
      >
        X
      </Button>
    </div>
  );
}

export default UpdateEmail;
