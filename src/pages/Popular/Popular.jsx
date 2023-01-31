import { ContentSidebar } from 'components/Sidebar';
import { Headlines } from 'components/Headlines';
import { PostsSection } from 'components/PostsSection';
import { defaultTrending } from 'data/defaultTrending';
import { defaultPosts } from 'data/defaultPosts';
import './style.css';

function Popular() {
  return (
    <main className="popular">
      <Headlines headlineList={defaultTrending} />
      <div className="main-content">
        <PostsSection postList={defaultPosts} popular />
        <ContentSidebar />
      </div>
    </main>
  );
}

export default Popular;
