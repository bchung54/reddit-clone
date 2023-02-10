import { ActionsBar } from 'components/ui/ActionsBar';
import { Link } from 'react-router-dom';
import randomAvatarURL from 'data/defaultAvatars';
import PropTypes from 'prop-types';
import timeAgoDisplay from 'utils/timeAgoDisplay';
import './style.css';
import { VoteGroup } from 'components/ui/VoteGroup';

function CommentStack({ comment, nested }) {
  return (
    <div className={`${!nested ? 'top-level' : ''} comment-stack`}>
      <div className="comment-sidehead">
        <div className="user-icon">
          <img src={randomAvatarURL()} alt="profile-avatar" />
        </div>
        <div className="collapse">
          <button className="comment-display" type="button">
            <span />
          </button>
        </div>
      </div>
      <div className="comment-main">
        <div className="comment-info">
          <Link to={`/u/${comment.user}`}>{comment.user}</Link>
          <span>·</span>
          <div>{timeAgoDisplay(comment.timeCreated)}</div>
        </div>
        <p>{comment.content}</p>
        <div className="comment-actions">
          <VoteGroup
            votes={comment.upvote.length - comment.downvote.length}
            inline
          />
          <ActionsBar location="commentThread" />
        </div>
        {comment.children &&
          comment.children.map((nestedComment) => {
            return (
              <CommentStack
                comment={nestedComment}
                nested
                key={nestedComment.id}
              />
            );
          })}
      </div>
    </div>
  );
}

const comment = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  timeCreated: PropTypes.instanceOf(Date).isRequired,
  timeUpdated: PropTypes.instanceOf(Date).isRequired,
  postId: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  upvote: PropTypes.arrayOf(PropTypes.string).isRequired,
  downvote: PropTypes.arrayOf(PropTypes.string).isRequired,
};
comment.children = PropTypes.arrayOf(PropTypes.shape(comment));
CommentStack.propTypes = {
  comment: PropTypes.shape(comment).isRequired,
  nested: PropTypes.bool,
};

CommentStack.defaultProps = {
  nested: false,
};

export default CommentStack;
