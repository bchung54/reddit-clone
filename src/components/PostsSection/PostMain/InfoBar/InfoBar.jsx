import PropTypes from 'prop-types';
import { Button } from 'components/ui/Button';
import timeAgoDisplay from 'utils/timeAgoDisplay';
import './style.css';

function InfoBar({ subreddit, username, timestamp, singleSubreddit }) {
  const timeDisplay = timeAgoDisplay(timestamp);
  return (
    <div className="post-info">
      {singleSubreddit && (
        <div className="subreddit-label">
          <a
            className="post-subreddit"
            href={`/r/${subreddit}`}
          >{`r/${subreddit}`}</a>
          <Button className="join">Join</Button>
          <span>&#x2022;</span>
        </div>
      )}
      <div className="post-user-info">
        <span>Posted by</span>
        <a className="username" href={`/user/${username}`}>
          {`u/${username}`}
        </a>
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
