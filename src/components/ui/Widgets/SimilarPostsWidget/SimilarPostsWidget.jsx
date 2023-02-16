// libraries
import { Link } from 'react-router-dom';
import { TbArrowBigTop } from 'react-icons/tb';
import { BiMessage } from 'react-icons/bi';
import { sampleSize } from 'lodash';

// contexts
import { useSubreddit } from 'contexts/SubredditContext';

// functions
import countDisplay from 'utils/countDisplay';
import timeAgoDisplay from 'utils/timeAgoDisplay';

// data
import { defaultPosts } from 'data/defaultPosts';

// styles
import './style.css';

export default function SimilarPostsWidget() {
  const similarPosts = sampleSize(defaultPosts, 6);
  const subreddit = useSubreddit();
  return (
    <div className="similar-posts-widget">
      <h2
        style={{
          backgroundColor: `${subreddit.color}`,
          color: `${subreddit.textColor}`,
        }}
      >
        Simiar to this post
      </h2>
      <div className="description">
        {similarPosts.map((post) => {
          return (
            <div className="post-blurb" key={post.id}>
              <div className="subreddit-label">
                <img
                  src="https://styles.redditmedia.com/t5_2u0xf/styles/communityIcon_2mfivuevv58a1.png"
                  alt="sub-icon"
                  className="sub-icon"
                />
                <Link
                  className="post-subreddit"
                  to={`/r/${post.subreddit}`}
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                >{`r/${post.subreddit}`}</Link>
              </div>
              {post.type === 'image' && (
                <img
                  src={post.content}
                  alt="post-preview"
                  className="blurb-preview"
                />
              )}
              <div className="title">{post.title}</div>
              <div className="stats">
                <div>
                  <TbArrowBigTop className="icon" />
                  <span>{countDisplay(post.votes)}</span>
                </div>
                <div>
                  <BiMessage className="icon" />
                  <span>{countDisplay(post.commentCount)}</span>
                </div>
                <span>&#x2022;</span>
                <span>{timeAgoDisplay(post.timestamp)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
