import { useParams, Outlet } from 'react-router-dom';
import { PostsSection } from 'components/PostsSection';

import { subredditList } from 'data/subredditList';
import { defaultPosts } from 'data/defaultPosts';
import { WidgetSidebar } from 'components/ui/Widgets';
import { SubredditHeading } from './SubredditHeading';

import './style.css';

function SubredditPage() {
  const { subredditName } = useParams();
  const subreddit = subredditList.find((sub) => sub.name === subredditName);
  const posts = defaultPosts.filter(
    (post) => post.subreddit === subreddit.name
  );
  return (
    <main className="subreddit">
      <SubredditHeading
        name={subreddit.name}
        title={subreddit.title}
        icon={subreddit.icon}
        color={subreddit.color}
        banner={subreddit.bannerURL}
        navbarLinks={subreddit.navbarLinks}
      />
      <div className="main-content">
        <PostsSection postList={posts} />
        <WidgetSidebar subreddit={subreddit} />
      </div>
      <Outlet />
    </main>
  );
}

export default SubredditPage;
