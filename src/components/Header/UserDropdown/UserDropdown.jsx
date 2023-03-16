// libraries
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// components
import { Switch } from 'components/ui/Switch';
import { Dropdown } from 'components/ui/Dropdown';
import { Button } from 'components/ui/Button';

// contexts
import { useAuth } from 'contexts/AuthContext';

// data
import { defaultAvatar } from 'data/defaultAvatars';

// icons
import { CgMoon } from 'react-icons/cg';
import { SlQuestion } from 'react-icons/sl';
import { GoMegaphone } from 'react-icons/go';
import { RxEnter, RxInfoCircled, RxTarget } from 'react-icons/rx';
import { RiFileList3Line, RiCoinLine } from 'react-icons/ri';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { IoEyeOutline, IoTelescopeOutline } from 'react-icons/io5';
import { AiOutlineTrademarkCircle } from 'react-icons/ai';
import { GrShield } from 'react-icons/gr';

// styles
import './style.css';

export default function UserDropdown({ showOverlay }) {
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
  const userMenuRef = useRef();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    setError();

    try {
      await logout();
      navigate(0);
    } catch {
      setError('Failed to log out');
    }
  };

  if (!currentUser) {
    return (
      <Dropdown
        icon={<FontAwesomeIcon icon={['far', 'fa-user']} className="icon" />}
        className="guest-container"
        selfClose
      >
        <div className="guest-dropdown dropdown-menu">
          <DropdownItem
            icon={<CgMoon />}
            text="Dark Mode"
            className="switch-item"
          >
            <Switch name="dark-mode" />
          </DropdownItem>
          <DropdownItem icon={<SlQuestion />} text="Help Center" link="#0" />
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
          <DropdownItem
            icon={<GoMegaphone />}
            text="Advertise on Reddit"
            link="#0"
          />
          <DropdownItem
            icon={<RxEnter />}
            text="Log In / Sign Up"
            onClick={showOverlay}
          />
          {error && <div>{error}</div>}
        </div>
      </Dropdown>
    );
  }
  return (
    <Dropdown
      icon={<img src={defaultAvatar} alt="avatar" className="avatar" />}
      contentElement={
        <div className="avatar-label">
          <span className="username">{currentUser.displayName}</span>
          <span className="karma-count">0 karma</span>
        </div>
      }
      className="user-container"
      selfClose
    >
      <div className="user-dropdown dropdown-menu" ref={userMenuRef}>
        <DropdownItem
          icon={<HiOutlineUserCircle />}
          text="My Stuff"
          className="user-option-heading"
        />
        <div className="user-option-list">
          <DropdownItem text="Online Status" className="switch-item">
            <Switch name="online-status" />
          </DropdownItem>
          <DropdownItem
            text="Profile"
            link={`/user/${currentUser.displayName}/`}
          />
          <DropdownItem text="Create Avatar" link="#0" />
          <DropdownItem text="User Settings" link="/settings/" />
        </div>
        <DropdownItem
          icon={<IoEyeOutline />}
          text="View Options"
          className="user-option-heading"
        />
        <div className="user-option-list">
          <DropdownItem text="Dark Mode" className="switch-item">
            <Switch name="dark-mode" />
          </DropdownItem>
        </div>
        <DropdownItem
          icon={<AiOutlineTrademarkCircle />}
          text="Create a Community"
          link="#0"
        />
        <DropdownItem
          icon={<GoMegaphone />}
          text="Advertise on Reddit"
          link="#0"
        />
        <DropdownItem icon={<RiCoinLine />} text="Coins" link="#0" />
        <DropdownItem icon={<GrShield />} text="Premium" link="#0" />
        <DropdownItem icon={<RxTarget />} text="Talk" link="#0" />
        <DropdownItem icon={<IoTelescopeOutline />} text="Explore" link="#0" />
        <DropdownItem icon={<SlQuestion />} text="Help Center" link="#0" />
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
        <DropdownItem
          icon={<RxEnter />}
          text="Log Out"
          onClick={handleLogOut}
        />
        {error && <div>{error}</div>}
        <div className="footnote">
          For entertainment and educational purposes only. No rights reserved.
        </div>
      </div>
    </Dropdown>
  );
}

UserDropdown.propTypes = {
  showOverlay: PropTypes.func.isRequired,
};

function DropdownItem({ icon, text, onClick, link, className, children }) {
  const contentElement = (
    <div className="dropdown-label">
      {icon && <span className="icon">{icon}</span>}
      <span>{text}</span>
    </div>
  );
  return (
    <div className={`dropdown-item ${className}`}>
      {link && <Link to={link}>{contentElement}</Link>}
      {onClick && (
        <Button onClick={onClick} className="dropdown">
          {contentElement}
        </Button>
      )}
      {!onClick && !link && (
        <div>
          {contentElement}
          {children && children}
        </div>
      )}
    </div>
  );
}

DropdownItem.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  link: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

DropdownItem.defaultProps = {
  icon: null,
  onClick: null,
  link: null,
  className: '',
  children: null,
};
