import Logo from "./Logo";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header>
      <div className="header-main">
        <Logo />
        <SearchBar />
      </div>
      <div className="header-actions">
        {/* <GuestButtons />
        <UserDropdown /> */}
      </div>
    </header>
  );
}

export default Header;
