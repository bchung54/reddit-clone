import PropTypes from 'prop-types';
import { useState } from 'react';
import Title from './Title';
import InfoBar from './InfoBar/InfoBar';
import { ActionsBar } from './ActionsBar';
import './style.css';

function PostMain({
  title,
  type,
  content,
  subreddit,
  username,
  timestamp,
  commentCount,
  singleSubreddit,
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
      firstIcon = type;
  }

  return (
    <div className="post-main">
      <Title title={title} type={type} content={content} />
      <InfoBar
        subreddit={subreddit}
        username={username}
        timestamp={timestamp}
        singleSubreddit={singleSubreddit}
      />
      <ActionsBar
        firstIcon={firstIcon}
        link={content}
        commentCount={commentCount}
        onExpand={handleExpansion}
      />
      {showContent === 'compress' && <div className="content">{preview}</div>}
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
  singleSubreddit: PropTypes.bool.isRequired,
};

export default PostMain;
