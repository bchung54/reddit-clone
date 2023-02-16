import logoImg from 'assets/images/reddit_logo_new.svg';
import { SearchBar } from './SearchBar';
import { HeaderButtons } from './HeaderButtons';
import { UserDropdown } from './UserDropdown';
import './style.css';

export default function Header() {
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
          <HeaderButtons />
          <UserDropdown />
        </div>
      </header>
    </div>
  );
}
