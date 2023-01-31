import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { VoteGroup } from './VoteGroup';
import { Thumbnail } from './Thumbnail';
import { PostMain } from './PostMain';

function PostsList({ orderedPosts, singleSub }) {
  const navigate = useNavigate();
  return (
    <div className="post-list">
      {orderedPosts.map((post) => (
        <div
          className="post-list-item"
          id={post.id}
          key={post.id}
          onClick={() => {
            document.body.style.overflowY = 'hidden';
            navigate(`/r/${post.subreddit}/comments/${post.id}/`);
          }}
          onKeyDown={() => {
            navigate(`/r/${post.subreddit}/comments/${post.id}/`);
          }}
          role="link"
          tabIndex={-1}
        >
          <VoteGroup votes={post.votes} />
          <Thumbnail type={post.type} image={post.content} />
          <PostMain
            title={post.title}
            type={post.type}
            content={post.content}
            subreddit={post.subreddit}
            username={post.username}
            timestamp={post.timestamp}
            commentCount={post.commentCount}
            singleSubreddit={singleSub}
          />
        </div>
      ))}
    </div>
  );
}

PostsList.propTypes = {
  orderedPosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      type: PropTypes.string,
      link: PropTypes.string,
      content: PropTypes.string,
      subreddit: PropTypes.string,
      username: PropTypes.string,
      timestamp: PropTypes.instanceOf(Date),
      votes: PropTypes.number,
      commentCount: PropTypes.number,
    })
  ).isRequired,
  singleSub: PropTypes.bool.isRequired,
};

export default PostsList;
