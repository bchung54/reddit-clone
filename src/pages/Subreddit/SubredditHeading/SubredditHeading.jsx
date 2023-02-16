import { Link } from 'react-router-dom';
import { Button } from 'components/ui/Button';
import { useSubreddit } from 'contexts/SubredditContext';
import NavBarLinks from './NavBarLinks';
import './style.css';

export default function SubredditHeading() {
  const subreddit = useSubreddit();
  return (
    <div className="subreddit-heading">
      <div
        className="banner"
        style={{
          backgroundColor: `${subreddit.color}`,
          background: `url(${subreddit.bannerURL}) center center / cover no-repeat ${subreddit.color}`,
        }}
      >
        <Link to={`/r/${subreddit.name}`}>
          <div />
        </Link>
      </div>
      <div className="header">
        <div className="content">
          <img src={subreddit.icon} alt="subreddit-icon" />
          <div className="title">
            <div className="text">
              <h1>{subreddit.title}</h1>
              <h2>{`r/${subreddit.name}`}</h2>
            </div>
            <Button className="join">Join</Button>
          </div>
        </div>
        <NavBarLinks />
      </div>
    </div>
  );
}
