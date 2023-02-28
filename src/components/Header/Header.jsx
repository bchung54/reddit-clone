import { useState } from 'react';
import { SignUp } from 'components/SignUp';
import { LogIn } from 'components/LogIn';
import { useAuth } from 'contexts/AuthContext';
import logoImg from 'assets/images/reddit_logo_new.svg';
import { RecoverUsername } from 'components/RecoverUsername';
import { ResetPassword } from 'components/ResetPassword';
import { SearchBar } from './SearchBar';
import { HeaderButtons } from './HeaderButtons';
import { UserDropdown } from './UserDropdown';
import './style.css';

export default function Header() {
  const { currentUser } = useAuth();
  const [overlay, setOverlay] = useState();
  const renderOverlay = (buttonValue) => {
    setOverlay(buttonValue);
  };
  const handleClose = () => {
    setOverlay(null);
  };
  return (
    <div className="header-container">
      <header>
        <div className="main">
          <div className="logo">
            <img src={logoImg} alt="reddit-logo" />
          </div>
          <SearchBar />
        </div>
        <div className="actions">
          {!currentUser && <HeaderButtons showOverlay={renderOverlay} />}
          <UserDropdown />
        </div>
      </header>
      {overlay && (
        <div className="overlay">
          {
            {
              login: (
                <LogIn onClose={handleClose} switchOverlay={renderOverlay} />
              ),
              signup: (
                <SignUp onClose={handleClose} switchOverlay={renderOverlay} />
              ),
              password: (
                <ResetPassword
                  onClose={handleClose}
                  switchOverlay={renderOverlay}
                />
              ),
              username: (
                <RecoverUsername
                  onClose={handleClose}
                  switchOverlay={renderOverlay}
                />
              ),
            }[overlay]
          }
        </div>
      )}
    </div>
  );
}
