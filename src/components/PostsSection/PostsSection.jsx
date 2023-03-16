// libraries
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// functions
import orderPosts from 'utils/orderPosts';

// components
import { FilterBar } from './FilterBar';
import { PostsList } from './PostsList';

// styles
import './style.css';

export default function PostsSection({ root, postList, sortByList }) {
  const orderedPosts = sortByList.map((filter) => orderPosts(postList, filter));
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get('sort');
  useEffect(() => {
    const newIndex = sortByList.findIndex((elem) => elem === sortBy);
    setActiveIndex(newIndex === -1 ? 0 : newIndex);
  }, [searchParams]);
  return (
    <div className="posts-section">
      {(root === '/r/popular/' || root === '/') && (
        <div className="main-heading">Popular posts</div>
      )}
      {root !== '/r/home/' && <FilterBar sortByList={sortByList} />}
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
  sortByList: PropTypes.arrayOf(PropTypes.string),
};

PostsSection.defaultProps = {
  root: '/',
  sortByList: ['hot', 'new', 'top', 'rising'],
};
