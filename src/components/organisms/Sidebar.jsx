import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../atoms/styled/Button';
import SidebarDropdown from '../molecules/SidebarDropdown';
import '../../styles/sidebar.css';

export function SidebarContainer({ name, children }) {
  return <div className={`${name}-sidebar`}>{children}</div>;
}

export function GuestSidebarMenu() {
  return (
    <SidebarContainer name="guest">
      <div className="guest-sidebar-menu">
        <h4>Feeds</h4>
        <a id="feed-home" href="/">
          <span className="sidebar-icon">
            <FontAwesomeIcon icon={['fas', 'fa-house']} />
          </span>
          <span className="feed-text">Home</span>
        </a>
        <a id="feed-popular" href="/r/popular">
          <span className="sidebar-icon">
            <FontAwesomeIcon icon={['fas', 'fa-square-up-right']} />
          </span>
          <span className="feed-text">Popular</span>
        </a>
        <h4>Topics</h4>
        <SidebarDropdown name="Gaming" textOnly={false} />
        <SidebarDropdown name="Sports" textOnly={false} />
        <SidebarDropdown name="Business" textOnly={false} />
        <SidebarDropdown name="Crypto" textOnly={false} />
        <SidebarDropdown name="Television" textOnly={false} />
        <SidebarDropdown name="Celebrity" textOnly={false} />
        <SidebarDropdown name="More Topics" textOnly={false} />
      </div>
      <div className="sidebar-join-container">
        <div className="sidebar-join-text">
          Create an account to follow your favorite communities and start taking
          part in conversations.
        </div>
        <Button className="sidebar-join">Join Reddit</Button>
      </div>
    </SidebarContainer>
  );
}

SidebarContainer.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
