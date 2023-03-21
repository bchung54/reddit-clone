import { useAuth } from 'contexts/AuthContext';
import { useOverlay } from 'contexts/OverlayContext';
import { NavBarLinks } from 'components/NavBarLinks';
import { Switch } from 'components/ui/Switch';
import { FaTrashAlt } from 'react-icons/fa';
import './style.css';

export default function Settings() {
  const { currentUser } = useAuth();
  const { setOverlay } = useOverlay();

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
          <button
            type="button"
            onClick={() => {
              setOverlay('updateEmail');
            }}
          >
            Change
          </button>
        </div>
        <div className="setting">
          <div className="setting-text">
            <h3>Change password</h3>
            <p>Password must be at least 6 characters long</p>
          </div>
          <button
            type="button"
            onClick={() => {
              setOverlay('updatePassword');
            }}
          >
            Change
          </button>
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
          <Switch name="redesign" />
        </div>
        <h3>Delete account</h3>
        <div className="setting">
          <div />
          <button className="delete-btn" title="pls dont" type="button">
            <FaTrashAlt className="icon" />
            <span id="delete">Delete Account</span>
          </button>
        </div>
      </div>
    </div>
  );
}
