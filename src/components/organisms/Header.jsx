import Logo from '../atoms/styled/Logo';
import SearchBar from '../molecules/styled/SearchBar';
import HeaderButtons from '../molecules/styled/HeaderButtons';
import UserDropdown from '../atoms/UserDropdown';
import '../../styles/header.css';

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
