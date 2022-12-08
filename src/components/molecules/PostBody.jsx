import PropTypes from 'prop-types';
import Title from './Title';
import InfoBar from './InfoBar';
import ActionsBar from './ActionsBar';

function PostBody(props) {
  const { title, link, subreddit, username, timestamp, commentCount } = props;
  return (
    <div className="post-body">
      <Title title={title} link={link} />
      <InfoBar
        subreddit={subreddit}
        username={username}
        timestamp={timestamp}
      />
      <ActionsBar commentCount={commentCount} />
    </div>
  );
}

PostBody.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  subreddit: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
  commentCount: PropTypes.number.isRequired,
};

export default PostBody;
