import PropTypes from 'prop-types';
import VoteGroup from '../VoteGroup';
import Thumbnail from '../../atoms/styled/Thumbnail';
import PostBody from '../PostBody';
import '../../../styles/molecules/postListItem.css';

function PostListItem(props) {
  const { votes, title, link, subreddit, username, timestamp, commentCount } =
    props;
  return (
    <div className="post-list-item">
      <VoteGroup votes={votes} />
      <Thumbnail />
      <PostBody
        title={title}
        link={link}
        subreddit={subreddit}
        username={username}
        timestamp={timestamp}
        commentCount={commentCount}
      />
    </div>
  );
}

PostListItem.propTypes = {
  votes: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  subreddit: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
  commentCount: PropTypes.number.isRequired,
};

export default PostListItem;
