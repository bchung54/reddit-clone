import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsHouseDoor, BsArrowUpRightCircleFill } from 'react-icons/bs';
import { Button } from 'components/ui/Button';
import { Accordian } from './Accordian';
import { Imprint } from './Imprint';
import './style.css';

export function SidebarContainer({ name, children }) {
  return <div className={`${name}-sidebar`}>{children}</div>;
}

export function GuestSidebar() {
  return (
    <SidebarContainer name="guest">
      <div className="guest-sidebar-menu">
        <h4>Feeds</h4>
        <Link id="feed-home" to="/r/home">
          <span className="icon">
            <BsHouseDoor />
          </span>
          <span className="feed-text">Home</span>
        </Link>
        <Link id="feed-popular" to="/r/popular">
          <span className="icon">
            <BsArrowUpRightCircleFill />
          </span>
          <span className="feed-text">Popular</span>
        </Link>
        <Accordian heading="Topics" />
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

export function ContentSidebar() {
  return (
    <SidebarContainer name="content">
      <Accordian heading="popular" />
      <Imprint />
    </SidebarContainer>
  );
}

SidebarContainer.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
