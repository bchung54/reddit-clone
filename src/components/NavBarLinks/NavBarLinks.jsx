import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSubreddit } from 'contexts/SubredditContext';
import './style.css';

export default function NavBarLinks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const subreddit = useSubreddit();
  const settings = useLocation().pathname.includes('/settings/');
  const root = document.querySelector(':root');
  if (settings) {
    root.style.setProperty('--navbar-color', '#0079d3');
  } else {
    root.style.setProperty('--navbar-color', subreddit.color);
  }
  const settingsTabList = [
    'Account',
    'Profile',
    'Saftey & Privacy',
    'Feed Settings',
    'Notifications',
    'Emails',
    'Subscriptions',
    'Chat & Messaging',
  ];
  return (
    <div className="navbar">
      {(settings ? settingsTabList : subreddit.navbarLinks).map(
        (link, index) => {
          const showActive = index === activeIndex ? 'active' : '';
          const handleClick = () => {
            setActiveIndex(index);
          };
          return (
            <Link
              to="#0"
              key={link}
              className={showActive}
              onClick={handleClick}
            >
              {link}
            </Link>
          );
        }
      )}
    </div>
  );
}
