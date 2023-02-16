import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSubreddit } from 'contexts/SubredditContext';

export default function NavBarLinks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const subreddit = useSubreddit();
  const renderedLinks = subreddit.navbarLinks.map((link, index) => {
    const showActive = index === activeIndex ? 'active' : '';
    const handleClick = () => {
      setActiveIndex(index);
    };
    return (
      <Link to="#0" key={link} className={showActive} onClick={handleClick}>
        {link}
      </Link>
    );
  });
  return <div className="navbar">{renderedLinks}</div>;
}
