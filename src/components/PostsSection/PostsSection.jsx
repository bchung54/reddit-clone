import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import orderPosts from 'utils/orderPosts';
import { FilterBar } from './FilterBar';
import { PostsList } from './PostsList';
import './style.css';

function PostsSection({ postList, popular, home }) {
  const filters = ['hot', 'new', 'top', 'rising'];
  const orderedPosts = filters.map((filter) => orderPosts(postList, filter));
  const singleSub = popular || home;
  return (
    <div className="posts-section">
      {popular && <div className="main-heading">Popular posts</div>}
      {!home && (
        <Routes>
          <Route
            path="/*"
            element={
              <FilterBar
                currentSub={popular ? 'popular' : `${postList[0].subreddit}`}
                sorting={filters}
                activeIndex={0}
              />
            }
          />
          {filters.map((filter, index) => {
            return (
              <Route
                path={`${filter}/`}
                element={
                  <FilterBar
                    currentSub={
                      popular ? 'popular' : `${postList[0].subreddit}`
                    }
                    sorting={filters}
                    activeIndex={index}
                  />
                }
                key={filter}
              />
            );
          })}
        </Routes>
      )}
      <Routes>
        <Route
          path="/*"
          element={
            <PostsList orderedPosts={orderedPosts[0]} singleSub={singleSub} />
          }
        />
        {filters.map((filter, index) => {
          return (
            <Route
              path={`${filter}/`}
              element={
                <PostsList
                  orderedPosts={orderedPosts[index]}
                  singleSub={singleSub}
                />
              }
              key={filter}
            />
          );
        })}
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
  popular: PropTypes.bool,
  home: PropTypes.bool,
};

PostsSection.defaultProps = {
  popular: false,
  home: false,
};

export default PostsSection;
