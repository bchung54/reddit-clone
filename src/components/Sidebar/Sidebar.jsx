// libraries
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import {
  BsBarChartLine,
  BsHouseDoor,
  BsArrowUpRightCircleFill,
  BsPlusLg,
} from 'react-icons/bs';
import { VscBell } from 'react-icons/vsc';
import { GiCrystalBall, GiRainbowStar } from 'react-icons/gi';
import { GrShield } from 'react-icons/gr';
import { IoChatbubblesOutline, IoShirtOutline } from 'react-icons/io5';
import { RxTarget } from 'react-icons/rx';
import { RiCoinLine } from 'react-icons/ri';

// components
import { useAuth } from 'contexts/AuthContext';
import { subredditList } from 'data/subredditList';
import { defaultAvatar } from 'data/defaultAvatars';
import { FavoriteStar } from 'components/ui/FavoriteStar';
import { Accordian } from './Accordian';
import { Imprint } from './Imprint';

// styles
import './style.css';

export function SidebarContainer({ name, children }) {
  return <div className={`${name}-sidebar`}>{children}</div>;
}

SidebarContainer.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export function MainSidebar() {
  const settingsPage = useLocation().pathname.startsWith('/settings');
  const { currentUser } = useAuth();
  if (!settingsPage) {
    return currentUser ? <UserSidebar /> : <GuestSidebar />;
  }
}

export function ContentSidebar() {
  return (
    <div className="content-sidebar">
      <Accordian heading="popular" />
      <Imprint />
    </div>
  );
}

function GuestSidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <h4>Feeds</h4>
        <Link id="feed-home" to="/r/home/">
          <span className="icon">
            <BsHouseDoor />
          </span>
          <span className="feed-text">Home</span>
        </Link>
        <Link id="feed-popular" to="/r/popular/">
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
        <Link className="sidebar-join" to="/account/signup">
          Join Reddit
        </Link>
      </div>
    </div>
  );
}

function UserSidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <h4>Custom Feeds</h4>
        <h4>Your Communities</h4>
        {subredditList
          .sort((a, b) => {
            return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
          })
          .map((sub) => {
            return (
              <div className="sub-link-item" key={sub.name}>
                <Link className="sub-link" to={`/r/${sub.name}`}>
                  <span className="icon">
                    <img src={sub.icon} alt="sub-icon" />
                  </span>
                  <span className="text">{`r/${sub.name}`}</span>
                </Link>
                <FavoriteStar />
              </div>
            );
          })}
        <h4>Feeds</h4>
        <Link className="feed-link" to="/r/home/">
          <span className="icon">
            <BsHouseDoor />
          </span>
          <span className="feed-text">Home</span>
        </Link>
        <Link id="feed-popular" to="/r/popular/">
          <span className="icon">
            <BsArrowUpRightCircleFill />
          </span>
          <span className="feed-text">Popular</span>
        </Link>
        <Link className="feed-link" to="/">
          <span className="icon">
            <BsBarChartLine />
          </span>
          <span className="feed-text">All</span>
        </Link>
        <Link className="feed-link" to="#0">
          <span className="icon">
            <IoChatbubblesOutline />
          </span>
          <span className="feed-text">Happening Now</span>
        </Link>
        <h4>Other</h4>
        <Link className="other-link" to="/settings/">
          <span className="icon">
            <img src={defaultAvatar} alt="sub-icon" />
          </span>
          <span className="other-text">User Settings</span>
        </Link>
        <Link className="other-link" to="#0">
          <span className="icon">
            <img src={defaultAvatar} alt="sub-icon" />
          </span>
          <span className="other-text">Messages</span>
        </Link>
        <Link className="other-link" to="#0">
          <span className="icon">
            <BsPlusLg />
          </span>
          <span className="other-text">Create Post</span>
        </Link>
        <Link className="other-link" to="#0">
          <span className="icon">
            <VscBell />
          </span>
          <span className="other-text">Notifications</span>
        </Link>
        <Link className="other-link" to="#0">
          <span className="icon">
            <GiRainbowStar />
          </span>
          <span className="other-text">Community Hubs</span>
        </Link>
        <Link className="other-link" to="#0">
          <span className="icon">
            <RiCoinLine />
          </span>
          <span className="other-text">Coins</span>
        </Link>
        <Link className="other-link" to="#0">
          <span className="icon">
            <GrShield />
          </span>
          <span className="other-text">Premium</span>
        </Link>
        <Link className="other-link" to="#0">
          <span className="icon">
            <IoShirtOutline />
          </span>
          <span className="other-text">Avatar</span>
        </Link>
        <Link className="other-link" to="#0">
          <span className="icon">
            <RxTarget />
          </span>
          <span className="other-text">Talk</span>
        </Link>
        <Link className="other-link" to="#0">
          <span className="icon">
            <GiCrystalBall />
          </span>
          <span className="other-text">Predictions</span>
        </Link>
      </div>
    </div>
  );
}
