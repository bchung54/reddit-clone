import { useSubreddit } from 'contexts/SubredditContext';
import './style.css';

export default function FlairsWidget() {
  const subreddit = useSubreddit();
  return (
    <div className="flairs-widget">
      <h2
        style={{
          backgroundColor: `${subreddit.color}`,
          color: `${subreddit.textColor}`,
        }}
      >
        Filter by flair
      </h2>
      <div className="description">
        <div className="tags">
          {subreddit.flairs.map((flair) => {
            return (
              <span
                key={flair.text}
                style={{
                  backgroundColor: `${flair.color}`,
                  color: `${flair.textColor}`,
                }}
              >
                {flair.text}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
