// libraries
import { useNavigate, useParams } from 'react-router-dom';
import { TfiClose } from 'react-icons/tfi';
import { TiDocumentText } from 'react-icons/ti';

// data
import { subredditList } from 'data/subredditList';
import { defaultPosts } from 'data/defaultPosts';
import { defaultComments } from 'data/defaultComments';

// components
import { VoteGroup } from 'components/ui/VoteGroup';
import { InfoBar } from 'components/ui/InfoBar';
import { ActionsBar } from 'components/ui/ActionsBar';
import { WidgetSidebar } from 'components/ui/Widgets';
import { TextFormattingBar } from 'components/ui/TextFormattingBar';
import { Button } from 'components/ui/Button';
import { CommentStack } from './CommentStack';
import './style.css';

export default function PostThread() {
  const { postId } = useParams();
  const post = defaultPosts.find((defaultPost) => {
    return defaultPost.id === postId;
  });
  const comments = defaultComments.filter((comment) => {
    return comment.postId === post.id;
  });
  const subreddit = subredditList.find((sub) => {
    return sub.name === post.subreddit;
  });
  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
    document.body.style = 'overflow-y: auto';
  };
  return (
    <div id="post-overlay">
      <div className="overlay-container">
        <div className="header">
          <div className="header-content">
            <VoteGroup votes={post.votes} inline />
            <div className="title">
              <TiDocumentText className="icon" />
              <div className="text">{post.title}</div>
            </div>
          </div>
          <Button className="close" onClick={handleClose}>
            <TfiClose />
            <span>Close</span>
          </Button>
        </div>
        <div className="overlay-content">
          <div className="post-thread">
            <div className="post-container">
              <VoteGroup votes={post.votes} />
              <div className="post-content">
                <InfoBar
                  subreddit={post.subreddit}
                  subIcon={subreddit.icon}
                  username={post.username}
                  timestamp={post.timestamp}
                  showSub
                  showSubIcon
                />
                <div className="post-title">{post.title}</div>
                <ActionsBar
                  commentCount={post.commentCount}
                  location="postThread"
                />
              </div>
            </div>
            <div
              style={{ height: '16px', width: '100%', backgroundColor: 'grey' }}
            />
            <form>
              <h3>
                Comment as <span>User</span>
              </h3>
              <textarea
                id="comment-submit-text"
                placeholder="What are your thoughts?"
              />
              <div className="text-actions">
                <TextFormattingBar />
                <Button className="comment-submit">Comment</Button>
              </div>
            </form>
            <div className="comment-filter">
              <div>Sort By: Best</div>
            </div>
            <div className="comment-list">
              {comments.map((comment) => {
                return <CommentStack comment={comment} key={comment.id} />;
              })}
            </div>
          </div>
          <WidgetSidebar subreddit={subreddit} post />
        </div>
      </div>
    </div>
  );
}
