import { useRef, useState } from 'react';
import { useAuth } from 'contexts/AuthContext';

export default function Settings() {
  return (
    <div className="settings">
      <UpdateEmailForm />
      <UpdatePasswordForm />
    </div>
  );
}

function UpdateEmailForm() {
  const emailRef = useRef();
  const currPasswordRef = useRef();
  const { currentUser, updateEmailHook, reauthenticate } = useAuth();
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
    <form className="update-email" onSubmit={handleUpdateEmail}>
      {error && <div className="error">{error}</div>}
      {message && <div className="message">{message}</div>}
      <label htmlFor="current-password">
        current password (required)
        <input name="current-password" type="password" ref={currPasswordRef} />
      </label>
      <label htmlFor="email">
        email
        <input
          name="email"
          type="email"
          ref={emailRef}
          defaultValue={currentUser.email}
          required
        />
      </label>
      <button type="submit" disabled={loading}>
        save
      </button>
    </form>
  );
}

function UpdatePasswordForm() {
  const currPasswordRef = useRef();
  const newPasswordRef = useRef();
  const verifyPasswordRef = useRef();
  const { reauthenticate, updatePasswordHook } = useAuth();
  const [error, setError] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  function handleUpdatePassword(event) {
    event.preventDefault();
    if (newPasswordRef.current.value !== verifyPasswordRef.current.value) {
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
    <form className="update-password" onSubmit={handleUpdatePassword}>
      {error && <div className="error">{error}</div>}
      {message && <div className="message">{message}</div>}
      <label htmlFor="current-password">
        current password (required)
        <input name="current-password" type="password" ref={currPasswordRef} />
      </label>
      <label htmlFor="new-password">
        new password
        <input name="new-password" type="password" ref={newPasswordRef} />
      </label>
      <label htmlFor="verify-password">
        verify password
        <input name="verify-password" type="password" ref={verifyPasswordRef} />
      </label>
      <button type="submit" disabled={loading}>
        save
      </button>
    </form>
  );
}
