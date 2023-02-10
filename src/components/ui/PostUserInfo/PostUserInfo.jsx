import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

function PostUserInfo({ username, timeDisplay }) {
  return (
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
  );
}

PostUserInfo.propTypes = {
  username: PropTypes.string.isRequired,
  timeDisplay: PropTypes.string.isRequired,
};

export default PostUserInfo;
