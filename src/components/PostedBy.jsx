import PropTypes from "prop-types";
import timeAgoDisplay from "../functions/timeAgoDisplay";
import "../styles/postedBy.css";

function PostedBy(props) {
  const { name, timestamp } = props;
  const timeDisplay = timeAgoDisplay(timestamp);
  return (
    <div className="posted-by">
      <span>Posted by</span>
      <a className="username" href={`/user/${name}`}>
        u/
        {name}
      </a>
      <span className="post-time-display">{timeDisplay}</span>
    </div>
  );
}

PostedBy.propTypes = {
  name: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
};

export default PostedBy;
