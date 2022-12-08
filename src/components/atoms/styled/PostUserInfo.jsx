import PropTypes from 'prop-types';
import timeAgoDisplay from '../../../functions/timeAgoDisplay';
import '../../../styles/atoms/postUserInfo.css';

function PostUserInfo(props) {
  const { name, timestamp } = props;
  const timeDisplay = timeAgoDisplay(timestamp);
  return (
    <div className="post-user-info">
      <span>Posted by</span>
      <a className="username" href={`/user/${name}`}>
        u/
        {name}
      </a>
      <span className="post-time-display">{timeDisplay}</span>
    </div>
  );
}

PostUserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
};

export default PostUserInfo;
