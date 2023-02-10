import { sampleSize } from 'lodash';
import { Link } from 'react-router-dom';
import { defaultPosts } from 'data/defaultPosts';
import { TbArrowBigTop } from 'react-icons/tb';
import { BiMessage } from 'react-icons/bi';
import countDisplay from 'utils/countDisplay';
import './style.css';
import timeAgoDisplay from 'utils/timeAgoDisplay';

export default function SimilarPostsWidget() {
  const similarPosts = sampleSize(defaultPosts, 6);
  return (
    <div className="similar-posts-widget">
      <h2>Simiar to this post</h2>
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
                  onClick={(e) => {
                    e.stopPropagation();
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
