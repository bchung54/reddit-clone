import { Logo } from './Logo';
import { SearchBar } from './SearchBar';
import { HeaderButtons } from './HeaderButtons';
import { UserDropdown } from './UserDropdown';
import './style.css';

function Header() {
  return (
    <div className="header-container">
      <header>
        <div className="header-main">
          <Logo />
          <SearchBar placeholderText="Search Reddit" />
        </div>
        <div className="header-actions">
          <HeaderButtons />
          <UserDropdown />
        </div>
      </header>
    </div>
  );
}

export default Header;
