import { useRef, useState } from 'react';
import { useAuth } from 'contexts/AuthContext';
import { NavBarLinks } from 'components/NavBarLinks';
import './style.css';
import { Switch } from 'components/ui/Switch';

export default function Settings() {
  const { currentUser } = useAuth();
  return (
    <div className="settings">
      <div className="header">
        <h2>User settings</h2>
        <NavBarLinks
          linksArray={[
            'Account',
            'Profile',
            'Safety & Privacy',
            'Feed Settings',
            'Notifications',
            'Emails',
            'Subscriptions',
            'Chat & Messaging',
          ]}
        />
      </div>
      <div className="tab-content">
        <h2>Account settings</h2>
        <h3>Account preferences</h3>
        <div className="setting">
          <div className="setting-text">
            <h3>Email address</h3>
            <p>{currentUser.email}</p>
          </div>
          <button type="button">Change</button>
        </div>
        <div className="setting">
          <div className="setting-text">
            <h3>Change password</h3>
            <p>Password must be at least 6 characters long</p>
          </div>
          <button type="button">Change</button>
        </div>
        <h3>Beta tests</h3>
        <div className="setting">
          <div className="setting-text">
            <h3>Opt into beta tests</h3>
            <p>
              See the newest features from Reddit and join the r/beta community
            </p>
          </div>
          <Switch name="beta" />
        </div>
        <div className="setting">
          <div className="setting-text">
            <h3>Opt out of the redesign</h3>
            <p>Revert back to old Reddit for the time being</p>
          </div>
          <Switch name="beta" />
        </div>
        <h3>Delete account</h3>
      </div>
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
