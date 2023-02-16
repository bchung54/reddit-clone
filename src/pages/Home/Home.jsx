import { ContentSidebar } from 'components/Sidebar';
import { PostsSection } from 'components/PostsSection';
import { defaultPosts } from 'data/defaultPosts';
import { useBlankSub } from 'contexts/SubredditContext';

export default function Home() {
  useBlankSub();
  return (
    <main className="home">
      <div className="main-content">
        <PostsSection root="/r/home/" postList={defaultPosts} />
        <ContentSidebar />
      </div>
    </main>
  );
}
