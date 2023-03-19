// components
import { Overlay } from 'components/Overlay';

import { SearchBar } from 'components/Header/SearchBar';
import { HeaderButtons } from 'components/Header/HeaderButtons';
import { UserDropdown } from 'components/Header/UserDropdown';

// contexts
import { useAuth } from 'contexts/AuthContext';
import { useOverlay } from 'contexts/OverlayContext';

// images
import logoImg from 'assets/images/reddit_logo_new.svg';

// styles
import './style.css';

export default function Header() {
  const { currentUser } = useAuth();
  const { overlay } = useOverlay();
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
          {!currentUser && <HeaderButtons />}
          <UserDropdown />
        </div>
      </header>
      {overlay && <Overlay />}
    </div>
  );
}
