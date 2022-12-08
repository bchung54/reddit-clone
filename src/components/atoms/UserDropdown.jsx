import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function UserDropdown() {
  return (
    <div className="user-dropdown">
      <FontAwesomeIcon icon={['far', 'fa-user']} />
      <FontAwesomeIcon icon={['fas', 'fa-chevron-down']} />
    </div>
  );
}

export default UserDropdown;
