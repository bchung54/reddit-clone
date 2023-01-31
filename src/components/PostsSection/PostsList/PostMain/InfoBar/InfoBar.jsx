import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'components/ui/Button';
import timeAgoDisplay from 'utils/timeAgoDisplay';
import './style.css';

function InfoBar({ subreddit, username, timestamp, singleSubreddit }) {
  const timeDisplay = timeAgoDisplay(timestamp);
  return (
    <div className="post-info">
      {singleSubreddit && (
        <div className="subreddit-label">
          <Link
            className="post-subreddit"
            to={`/r/${subreddit}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >{`r/${subreddit}`}</Link>
          <Button className="join">Join</Button>
          <span>&#x2022;</span>
        </div>
      )}
      <div className="post-user-info">
        <span>Posted by</span>
        <Link
          className="username"
          to={`/user/${username}/`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {`u/${username}`}
        </Link>
        <span className="post-time-display">{timeDisplay}</span>
      </div>
    </div>
  );
}

InfoBar.propTypes = {
  subreddit: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
  singleSubreddit: PropTypes.bool,
};

InfoBar.defaultProps = {
  singleSubreddit: false,
};

export default InfoBar;
