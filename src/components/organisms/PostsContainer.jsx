import PropTypes from 'prop-types';
import FilterBar from '../molecules/styled/FilterBar';
import PostListItem from '../molecules/styled/PostListItem';
import '../../styles/postsContainer.css';

function PostsContainer({ postList }) {
  const postListItems = postList.map((post) => (
    <PostListItem
      votes={post.votes}
      title={post.title}
      link={post.link}
      subreddit={post.subreddit}
      username={post.username}
      timestamp={post.timestamp}
      commentCount={post.commentCount}
      key={1}
    />
  ));
  return (
    <div className="posts-container">
      <div className="main-heading">Popular posts</div>
      <FilterBar guest />
      <div className="post-list">{postListItems}</div>
    </div>
  );
}

PostsContainer.propTypes = {
  postList: PropTypes.arrayOf(
    PropTypes.shape({
      votes: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      subreddit: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      timestamp: PropTypes.instanceOf(Date).isRequired,
      commentCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PostsContainer;
