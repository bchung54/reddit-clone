import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PostUserInfo } from 'components/ui/PostUserInfo';
import { Button } from 'components/ui/Button';
import timeAgoDisplay from 'utils/timeAgoDisplay';
import defaultIcon from 'assets/images/subIcons/worldnews.svg';
import './style.css';

function InfoBar({
  subreddit,
  subIcon,
  username,
  timestamp,
  showSub,
  showSubIcon,
  showJoin,
}) {
  const timeDisplay = timeAgoDisplay(timestamp);
  return (
    <div className="post-info">
      {showSub && (
        <div className="subreddit-label">
          {showSubIcon && (
            <img
              src={subIcon === 'svg' ? defaultIcon : subIcon}
              alt="sub-icon"
            />
          )}
          <Link
            className="post-subreddit"
            to={`/r/${subreddit}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >{`r/${subreddit}`}</Link>
          {showJoin && <Button className="join">Join</Button>}
          <span>&#x2022;</span>
        </div>
      )}
      <PostUserInfo username={username} timeDisplay={timeDisplay} />
    </div>
  );
}

InfoBar.propTypes = {
  subreddit: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
  subIcon: PropTypes.string,
  showSub: PropTypes.bool,
  showSubIcon: PropTypes.bool,
  showJoin: PropTypes.bool,
};

InfoBar.defaultProps = {
  subIcon: '',
  showSub: false,
  showSubIcon: false,
  showJoin: false,
};

export default InfoBar;
