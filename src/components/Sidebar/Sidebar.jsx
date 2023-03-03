// libraries
import { Link, useLocation } from 'react-router-dom';
import {
  BsHouseDoor,
  BsArrowUpRightCircleFill,
  BsPlusLg,
} from 'react-icons/bs';
import { CiStar } from 'react-icons/ci';
import { VscBell } from 'react-icons/vsc';
import { GiCrystalBall, GiRainbowStar } from 'react-icons/gi';
import { GrShield } from 'react-icons/gr';
import { IoShirtOutline } from 'react-icons/io5';
import { RxTarget } from 'react-icons/rx';

// components
/* import { Button } from 'components/ui/Button';
 */ import { useAuth } from 'contexts/AuthContext';
import { subredditList } from 'data/subredditList';
import { defaultAvatar } from 'data/defaultAvatars';
import { RiCoinLine } from 'react-icons/ri';
import { Accordian } from './Accordian';
import { Imprint } from './Imprint';

// styles
import './style.css';

export function SidebarContainer() {
  const settingsPage = useLocation().pathname.startsWith('/settings');
  const { currentUser } = useAuth();
  if (currentUser) {
    return <UserSidebar />;
  }
  return !settingsPage && <GuestSidebar />;
}

export function GuestSidebar() {
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

export function ContentSidebar() {
  return (
    <div className="content-sidebar">
      <Accordian heading="popular" />
      <Imprint />
    </div>
  );
}

export function UserSidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <h4>Custom Feeds</h4>
        <h4>Your Communities</h4>
        {subredditList.map((sub) => {
          return (
            <Link className="sub-link" to={`/r/${sub.name}`} key={sub.name}>
              <div className="sub-link-label">
                <span className="icon">
                  <img src={sub.icon} alt="sub-icon" />
                </span>
                <span className="text">{`r/${sub.name}`}</span>
              </div>
              <CiStar className="star" />
            </Link>
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
