import PropTypes from 'prop-types';
import { Button } from 'components/ui/Button';
import { ActionIcon } from 'components/ui/ActionIcons';
import countDisplay from 'utils/countDisplay';
import './style.css';

export default function ActionsBar({ commentCount, location }) {
  const actions = {
    subreddit: ['comment', 'share', 'save', 'hide', 'report'],
    postThread: ['comment', 'share', 'save', 'report'],
    commentThread: ['reply', 'award', 'share', 'report', 'save', 'follow'],
  };
  const commentCountDisplay = countDisplay(commentCount);
  return (
    <div className="action-bar">
      {actions[location].map((action) => {
        return (
          <Button className="action" key={action}>
            {location !== 'commentThread' && <ActionIcon type={action} />}
            {action === 'reply' && <ActionIcon type="comment" />}
            <span className="action-text">
              {action === 'comment'
                ? `${commentCountDisplay} comments`
                : `${action[0].toUpperCase() + action.slice(1)}`}
            </span>
          </Button>
        );
      })}
    </div>
  );
}

ActionsBar.propTypes = {
  commentCount: PropTypes.number,
  location: PropTypes.string,
};

ActionsBar.defaultProps = {
  commentCount: 0,
  location: 'subreddit',
};
