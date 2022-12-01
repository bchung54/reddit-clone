import PropTypes from "prop-types";
import PostSubreddit from "./atoms/PostSubreddit";
import JoinButton from "./atoms/JoinButton";
import PostedBy from "./PostedBy";

function InfoBar(props) {
  const { subreddit, username, timestamp } = props;
  return (
    <div className="post-info">
      <PostSubreddit name={subreddit} />
      <JoinButton />
      <span>&#x2022;</span>
      <PostedBy name={username} timestamp={timestamp} />
    </div>
  );
}

InfoBar.propTypes = {
  subreddit: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
};

export default InfoBar;
