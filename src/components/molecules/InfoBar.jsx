import PropTypes from 'prop-types';
import PostSubreddit from '../atoms/PostSubreddit';
import Button from '../atoms/styled/Button';
import PostUserInfo from '../atoms/styled/PostUserInfo';

function InfoBar(props) {
  const { subreddit, username, timestamp } = props;
  return (
    <div className="post-info">
      <PostSubreddit name={subreddit} />
      <Button className="join">Join</Button>
      <span>&#x2022;</span>
      <PostUserInfo name={username} timestamp={timestamp} />
    </div>
  );
}

InfoBar.propTypes = {
  subreddit: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
};

export default InfoBar;
