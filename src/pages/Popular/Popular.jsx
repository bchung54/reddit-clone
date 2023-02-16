import { Headlines } from 'components/Headlines';
import { PostsSection } from 'components/PostsSection';
import { ContentSidebar } from 'components/Sidebar';
import { defaultTrending } from 'data/defaultTrending';
import { defaultPosts } from 'data/defaultPosts';
import { useBlankSub } from 'contexts/SubredditContext';
import { useLocation } from 'react-router-dom';

export default function Popular() {
  useBlankSub();
  const path = useLocation().pathname;
  const root = path.includes('/r/popular/') ? '/r/popular/' : '/';
  return (
    <main className="popular">
      <Headlines headlineList={defaultTrending} />
      <div className="main-content">
        <PostsSection root={root} postList={defaultPosts} />
        <ContentSidebar />
      </div>
    </main>
  );
}
