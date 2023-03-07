import { useState } from 'react';

// components
import { SignUp } from 'components/SignUp';
import { LogIn } from 'components/LogIn';
import { RecoverUsername } from 'components/RecoverUsername';
import { ResetPassword } from 'components/ResetPassword';

import { SearchBar } from 'components/Header/SearchBar';
import { HeaderButtons } from 'components/Header/HeaderButtons';
import { UserDropdown } from 'components/Header/UserDropdown';

// contexts
import { useAuth } from 'contexts/AuthContext';

// images
import logoImg from 'assets/images/reddit_logo_new.svg';

// styles
import './style.css';

export default function Header() {
  const { currentUser } = useAuth();
  const [overlay, setOverlay] = useState();
  const renderOverlay = (buttonValue) => {
    if (buttonValue) {
      setOverlay(buttonValue);
    } else {
      setOverlay('login');
    }
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
          <UserDropdown showOverlay={renderOverlay} />
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
