import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../atoms/styled/Button';

function SidebarDropdown({ name, textOnly }) {
  let icon;
  if (!textOnly) {
    switch (name) {
      case 'Gaming':
        icon = ['fas', 'fa-gamepad'];
        break;
      case 'Sports':
        icon = ['fas', 'fa-baseball'];
        break;
      case 'Business':
        icon = ['fas', 'fa-chart-line'];
        break;
      case 'Crypto':
        icon = ['fas', 'fa-coins'];
        break;
      case 'Television':
        icon = ['fas', 'fa-tv'];
        break;
      case 'Celebrity':
        icon = ['fas', 'fa-sun'];
        break;
      case 'More Topics':
        icon = ['fas', 'fa-ellipsis'];
        break;
      default:
        icon = null;
    }
  }
  return (
    <Button className="sidebar-dropdown-item">
      {icon && (
        <span className="sidebar-icon">
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
      <span className="dropdown-text">{name}</span>
      <span>
        <FontAwesomeIcon icon={['fas', 'fa-chevron-down']} />
      </span>
    </Button>
  );
}

SidebarDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  textOnly: PropTypes.bool.isRequired,
};

export default SidebarDropdown;
