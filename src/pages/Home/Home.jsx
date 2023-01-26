import { ContentSidebar } from 'components/Sidebar';
import { PostsSection } from 'components/PostsSection';
import { defaultPosts } from 'data/defaultPosts';
import './style.css';

function Home() {
  return (
    <main className="home">
      <div className="main-content">
        <PostsSection postList={defaultPosts} home />
        <ContentSidebar />
      </div>
    </main>
  );
}

export default Home;
