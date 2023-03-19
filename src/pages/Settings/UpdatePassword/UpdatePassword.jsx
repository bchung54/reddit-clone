import { useRef, useState } from 'react';
import { useAuth } from 'contexts/AuthContext';
import { useOverlay } from 'contexts/OverlayContext';
import { Button } from 'components/ui/Button';

function UpdatePassword() {
  // contexts
  const { reauthenticate, updatePasswordHook } = useAuth();
  const { setOverlay } = useOverlay();

  // references
  const currPasswordRef = useRef();
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  // states
  const [error, setError] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);

  function handleUpdatePassword(event) {
    event.preventDefault();
    if (newPasswordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match');
    }

    setError(null);
    setMessage(null);
    setLoading(true);
    reauthenticate(currPasswordRef.current.value)
      .then(() => {
        updatePasswordHook(newPasswordRef.current.value)
          .then(() => {
            setMessage('Password has been updated');
          })
          .catch(() => {
            setError('Failed to update password: check requirements');
          });
      })
      .catch(() => {
        setMessage('Incorrect current password entered');
      })
      .finally(() => {
        event.target.reset();
      });
    return setLoading(false);
  }
  return (
    <div className="update-password auth-card">
      <form onSubmit={handleUpdatePassword}>
        <h2>Update your password</h2>
        {error && <div className="error">{error}</div>}
        {message && <div className="message">{message}</div>}
        <input
          name="current-password"
          placeholder="current password"
          type="password"
          ref={currPasswordRef}
          required
        />

        <input
          name="new-password"
          placeholder="new password"
          type="password"
          ref={newPasswordRef}
        />
        <input
          name="confirm-password"
          placeholder="confirm new password"
          type="password"
          ref={confirmPasswordRef}
        />
        <input type="submit" value="Save" disabled={loading} />
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
export default UpdatePassword;
