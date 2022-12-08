import PropTypes from 'prop-types';

function PostSubreddit(props) {
  const { name } = props;
  return <a className="post-subreddit" href={`/r/${name}`}>{`r/${name}`}</a>;
}

PostSubreddit.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PostSubreddit;
