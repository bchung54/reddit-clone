import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'components/ui/Button';
import ActionIcon from './ActionIcon';
import ActionText from './ActionText';
import './style.css';

function ActionsBar({ firstIcon, link, commentCount, onExpand }) {
  const actions = ['comment', 'share', 'save', 'hide', 'report'];
  return (
    <div className="action-bar">
      {firstIcon === 'expand' || firstIcon === 'compress' ? (
        <Button className="action" onClick={onExpand}>
          <ActionIcon type={firstIcon} />
        </Button>
      ) : (
        <Link className="action-button" to={link}>
          <ActionIcon type={firstIcon} />
        </Link>
      )}
      {actions.map((type) => {
        return (
          <Button className="action" key={type}>
            <ActionIcon type={type} />
            <ActionText type={type} commentCount={commentCount} />
          </Button>
        );
      })}
    </div>
  );
}

ActionsBar.propTypes = {
  firstIcon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  onExpand: PropTypes.func.isRequired,
};

export default ActionsBar;
