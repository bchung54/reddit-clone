import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/ui/Button';
import { ActionIcon } from 'components/ui/ActionIcons';
import { InfoBar } from 'components/ui/InfoBar';
import { ActionsBar } from 'components/ui/ActionsBar';
import Title from './Title';
import './style.css';

function PostMain({
  title,
  type,
  content,
  subreddit,
  username,
  timestamp,
  commentCount,
  singleSub,
}) {
  const [showContent, setShowContent] = useState('expand');
  const handleExpansion = () => {
    if (showContent === 'expand') {
      setShowContent('compress');
    } else {
      setShowContent('expand');
    }
  };

  let preview;
  let firstIcon;
  switch (type) {
    case 'image':
      preview = <img src={content} alt="content" />;
      firstIcon = showContent;
      break;
    case 'text':
      if (content) {
        preview = <p>{content}</p>;
        firstIcon = showContent;
      } else {
        firstIcon = type;
      }
      break;
    case 'external':
      firstIcon = type;
      break;
    default:
  }

  return (
    <div className="post-main">
      <Title title={title} type={type} content={content} />
      <InfoBar
        subreddit={subreddit}
        username={username}
        timestamp={timestamp}
        showSub={!singleSub}
        showJoin={!singleSub}
      />
      <div className="action-group">
        {firstIcon === 'expand' || firstIcon === 'compress' ? (
          <Button className="action" onClick={handleExpansion}>
            <ActionIcon type={firstIcon} />
          </Button>
        ) : (
          <Link className="action-button" to={content}>
            <ActionIcon type={firstIcon} />
          </Link>
        )}
        <ActionsBar commentCount={commentCount} />
      </div>
      {showContent === 'compress' && <div className="preview">{preview}</div>}
    </div>
  );
}

PostMain.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  subreddit: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
  commentCount: PropTypes.number.isRequired,
  singleSub: PropTypes.bool.isRequired,
};

export default PostMain;
