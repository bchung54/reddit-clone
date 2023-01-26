import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Switch } from 'components/ui/Switch';
import { Dropdown } from 'components/ui/Dropdown';
import { CgMoon } from 'react-icons/cg';
import { SlQuestion } from 'react-icons/sl';
import { GoMegaphone } from 'react-icons/go';
import { RxEnter, RxInfoCircled } from 'react-icons/rx';
import { RiFileList3Line } from 'react-icons/ri';
import './style.css';

function UserDropdown() {
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
  return (
    <Dropdown icon={<FontAwesomeIcon icon={['far', 'fa-user']} />} selfClose>
      <div className="user-dropdown-menu">
        <DropdownItem icon={<CgMoon />} text="Dark Mode">
          <Switch name="dark-mode" />
        </DropdownItem>
        <DropdownItem icon={<SlQuestion />} text="Help Center" link />
        <Dropdown icon={<RxInfoCircled />} labelText="More">
          {moreInfoList.map((item) => {
            return (
              <a href="#0" key={item}>
                <span>{item}</span>
              </a>
            );
          })}
        </Dropdown>
        <Dropdown icon={<RiFileList3Line />} labelText="Terms & Policies">
          {termsAndPoliciesList.map((item) => {
            return (
              <a href="#0" key={item}>
                <span>{item}</span>
              </a>
            );
          })}
        </Dropdown>
        <DropdownItem icon={<GoMegaphone />} text="Advertise on Reddit" link />
        <DropdownItem icon={<RxEnter />} text="Log In / Sign Up" link />
      </div>
    </Dropdown>
  );
}

function DropdownItem({ icon, text, link, children }) {
  return (
    <div className="user-dropdown-item">
      <span className="icon">{icon}</span>
      <span className="item-content">
        {link ? <a href="#0">{text}</a> : <span>{text}</span>}
        {children && children}
      </span>
    </div>
  );
}

DropdownItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.bool,
  children: PropTypes.node,
};

DropdownItem.defaultProps = {
  link: false,
  children: null,
};

export default UserDropdown;
