// libraries
import PropTypes from 'prop-types';
import { useState } from 'react';

// functions
import orderPosts from 'utils/orderPosts';

// components
import { FilterBar } from './FilterBar';
import { PostsList } from './PostsList';

// styles
import './style.css';

export default function PostsSection({ root, postList }) {
  const sortByList = ['hot', 'new', 'top', 'rising'];
  const orderedPosts = sortByList.map((filter) => orderPosts(postList, filter));
  const [activeIndex, setActiveIndex] = useState(0);
  const updateSortBy = (newSortBy) => {
    setActiveIndex(newSortBy);
  };
  return (
    <div className="posts-section">
      {(root === '/r/popular/' || root === '/') && (
        <div className="main-heading">Popular posts</div>
      )}
      {root !== '/r/home/' && (
        <FilterBar
          root={root}
          sortByList={sortByList}
          activeIndex={activeIndex}
          updatePostsSection={updateSortBy}
        />
      )}
      <PostsList orderedPosts={orderedPosts[activeIndex]} />
    </div>
  );
}

PostsSection.propTypes = {
  root: PropTypes.string,
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
};

PostsSection.defaultProps = {
  root: '/',
};
