// libraries
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// components
import { Switch } from 'components/ui/Switch';
import { Dropdown } from 'components/ui/Dropdown';

// contexts
import { useAuth } from 'contexts/AuthContext';

// icons
import { CgMoon } from 'react-icons/cg';
import { SlQuestion } from 'react-icons/sl';
import { GoMegaphone } from 'react-icons/go';
import { RxEnter, RxInfoCircled } from 'react-icons/rx';
import { RiFileList3Line } from 'react-icons/ri';

// styles
import './style.css';
import { Button } from 'components/ui/Button';

export default function UserDropdown() {
  const moreInfoList = [
    'Reddit iOS',
    'Reddit Android',
    'Rereddit',
    'Best Communities',
    'Communities',
    'About Reddit',
    'Blog',
    'Careers',
    'Press',
  ];
  const termsAndPoliciesList = [
    'User Agreement',
    'Privacy Policy',
    'Content Policy',
    'Moderator Code of Conduct',
  ];
  const [error, setError] = useState();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  async function handleLogOut() {
    setError();

    try {
      await logout();
      navigate(0);
    } catch {
      setError('Failed to log out');
    }
  }
  return (
    <Dropdown
      icon={<FontAwesomeIcon icon={['far', 'fa-user']} className="icon" />}
      labelText={currentUser ? currentUser.displayName : ''}
      selfClose
    >
      <div className="user-dropdown-menu">
        <DropdownItem icon={<CgMoon />} text="Dark Mode">
          <Switch name="dark-mode" />
        </DropdownItem>
        <DropdownItem icon={<SlQuestion />} text="Help Center" link />
        <Dropdown icon={<RxInfoCircled className="icon" />} labelText="More">
          {moreInfoList.map((item) => {
            return (
              <Link to="#0" key={item}>
                <span>{item}</span>
              </Link>
            );
          })}
        </Dropdown>
        <Dropdown
          icon={<RiFileList3Line className="icon" />}
          labelText="Terms & Policies"
        >
          {termsAndPoliciesList.map((item) => {
            return (
              <Link to="#0" key={item}>
                <span>{item}</span>
              </Link>
            );
          })}
        </Dropdown>
        <DropdownItem icon={<GoMegaphone />} text="Advertise on Reddit" link />
        <DropdownItem
          icon={<RxEnter />}
          text={currentUser ? 'Log Out' : 'Log In / Sign Up'}
          onClick={currentUser ? handleLogOut : null}
        />
        {error && <div>{error}</div>}
      </div>
    </Dropdown>
  );
}

function DropdownItem({ icon, text, onClick, link, children }) {
  return (
    <div className="user-dropdown-item">
      <span className="icon">{icon}</span>
      <span className="item-content">
        {link && <Link to="#0">{text}</Link>}
        {onClick && <Button onClick={onClick}>{text}</Button>}
        {!onClick && !link && <span>{text}</span>}
        {children && children}
      </span>
    </div>
  );
}

DropdownItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  link: PropTypes.bool,
  children: PropTypes.node,
};

DropdownItem.defaultProps = {
  onClick: null,
  link: false,
  children: null,
};
