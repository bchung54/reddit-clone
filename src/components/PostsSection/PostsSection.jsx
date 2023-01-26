import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import { FilterBar } from './FilterBar';
import { VoteGroup } from './VoteGroup';
import { Thumbnail } from './Thumbnail';
import { PostMain } from './PostMain';
import './style.css';

function PostsSection({ postList, popular, home }) {
  const filters = ['hot', 'new', 'top', 'rising'];
  const hotList = postList
    .sort((a, b) => {
      const voteSecA = a.votes * a.timestamp;
      const voteSecB = b.votes * a.timestamp;
      return voteSecA - voteSecB;
    })
    .map((post) => (
      <div className="post-list-item" key={post.id}>
        <VoteGroup votes={post.votes} />
        <Thumbnail type={post.type} image={post.content} />
        <PostMain
          title={post.title}
          type={post.type}
          content={post.content}
          subreddit={post.subreddit}
          username={post.username}
          timestamp={post.timestamp}
          commentCount={post.commentCount}
          singleSubreddit={popular || home}
        />
      </div>
    ));
  const newList = postList
    .sort((a, b) => {
      return b.timestamp - a.timestamp;
    })
    .map((post) => (
      <div className="post-list-item" key={post.id}>
        <VoteGroup votes={post.votes} />
        <Thumbnail type={post.type} image={post.content} />
        <PostMain
          title={post.title}
          type={post.type}
          content={post.content}
          subreddit={post.subreddit}
          username={post.username}
          timestamp={post.timestamp}
          commentCount={post.commentCount}
          singleSubreddit={popular || home}
        />
      </div>
    ));
  const topList = postList
    .sort((a, b) => {
      return b.votes - a.votes;
    })
    .map((post) => (
      <div className="post-list-item" key={post.id}>
        <VoteGroup votes={post.votes} />
        <Thumbnail type={post.type} image={post.content} />
        <PostMain
          title={post.title}
          type={post.type}
          content={post.content}
          subreddit={post.subreddit}
          username={post.username}
          timestamp={post.timestamp}
          commentCount={post.commentCount}
          singleSubreddit={popular || home}
        />
      </div>
    ));
  const risingList = postList.map((post) => (
    <div className="post-list-item" key={post.id}>
      <VoteGroup votes={post.votes} />
      <Thumbnail type={post.type} image={post.content} />
      <PostMain
        title={post.title}
        type={post.type}
        content={post.content}
        subreddit={post.subreddit}
        username={post.username}
        timestamp={post.timestamp}
        commentCount={post.commentCount}
        singleSubreddit={popular || home}
      />
    </div>
  ));

  return (
    <div className="posts-section">
      {popular && <div className="main-heading">Popular posts</div>}
      <FilterBar
        currentSub={popular ? 'popular' : `${postList[0].subreddit}`}
        sorting={filters}
        activeIndex={0}
      />
      <Routes>
        <Route index element={<div className="post-list">{hotList}</div>} />
        <Route
          path="hot/"
          element={<div className="post-list">{hotList}</div>}
        />
        <Route
          path="new/"
          element={<div className="post-list">{newList}</div>}
        />
        <Route
          path="top/"
          element={<div className="post-list">{topList}</div>}
        />
        <Route
          path="rising/"
          element={<div className="post-list">{risingList}</div>}
        />
      </Routes>
    </div>
  );
}

PostsSection.propTypes = {
  postList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      type: PropTypes.string,
      link: PropTypes.string,
      content: PropTypes.string,
      subreddit: PropTypes.string,
      username: PropTypes.string,
      timestamp: PropTypes.instanceOf(Date),
      votes: PropTypes.number,
      commentCount: PropTypes.number,
    })
  ).isRequired,
  /* orderBy: PropTypes.number, */
  popular: PropTypes.bool,
  home: PropTypes.bool,
};

PostsSection.defaultProps = {
  /* orderBy: 0, */
  popular: false,
  home: false,
};

export default PostsSection;
