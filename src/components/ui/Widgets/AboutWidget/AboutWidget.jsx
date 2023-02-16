import { useSubreddit } from 'contexts/SubredditContext';
import './style.css';

export default function AboutWidget() {
  const subreddit = useSubreddit();
  return (
    <div className="about-widget">
      <h2
        style={{
          backgroundColor: `${subreddit.color}`,
          color: `${subreddit.textColor}`,
        }}
      >
        About Community
      </h2>
      <div className="description">
        <div>{subreddit.about}</div>
        <div>{`Created ${subreddit.dateCreated}`}</div>
        <div className="stats">
          <div className="subscribers">
            <div>{subreddit.subscribers}</div>
            <p>Members</p>
          </div>
          <div className="online">
            <div>{subreddit.online}</div>
            <p>Online</p>
          </div>
        </div>
      </div>
    </div>
  );
}
