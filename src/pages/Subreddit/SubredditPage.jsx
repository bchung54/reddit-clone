import { useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { PostsSection } from 'components/PostsSection';
import { WidgetSidebar } from 'components/ui/Widgets';

import { useSubredditUpdate } from 'contexts/SubredditContext';
import { subredditList } from 'data/subredditList';
import { defaultPosts } from 'data/defaultPosts';
import { SubredditHeading } from './SubredditHeading';

export default function SubredditPage() {
  const { subredditName } = useParams();
  const subreddit = subredditList.find((sub) => sub.name === subredditName);
  const setSubreddit = useSubredditUpdate();
  useEffect(() => {
    setSubreddit(subreddit);
    const root = document.querySelector(':root');
    root.style.setProperty('--subreddit-color', subreddit.color);
  }, [subredditName]);
  const posts = defaultPosts.filter((post) => post.subreddit === subredditName);
  return (
    <main className="subreddit">
      <SubredditHeading />
      <div className="main-content">
        <PostsSection root={`/r/${subredditName}/`} postList={posts} />
        <WidgetSidebar />
      </div>
      <Outlet />
    </main>
  );
}
