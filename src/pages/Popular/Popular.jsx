import PropTypes from 'prop-types';
import { ContentSidebar } from 'components/Sidebar';
import { Headlines } from 'components/Headlines';
import { PostsSection } from 'components/PostsSection';
import { defaultTrending } from 'data/defaultTrending';
import { defaultPosts } from 'data/defaultPosts';
import './style.css';

function Popular({ orderBy }) {
  return (
    <main className="popular">
      <Headlines headlineList={defaultTrending} />
      <div className="main-content">
        <PostsSection postList={defaultPosts} orderBy={orderBy} popular />
        <ContentSidebar />
      </div>
    </main>
  );
}

Popular.propTypes = {
  orderBy: PropTypes.oneOf(['hot', 'new', 'top', 'rising']),
};

Popular.defaultProps = {
  orderBy: 'hot',
};

export default Popular;
