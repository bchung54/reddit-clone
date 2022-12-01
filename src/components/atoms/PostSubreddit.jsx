import PropTypes from "prop-types";
import "../../styles/postSubreddit.css";

function PostSubreddit(props) {
  const { name } = props;
  return <a className="post-subreddit" href={`/r/${name}`}>{`r/${name}`}</a>;
}

PostSubreddit.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PostSubreddit;
