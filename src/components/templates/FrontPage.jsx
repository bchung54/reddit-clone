import Header from '../organisms/Header';
import { GuestSidebarMenu, SidebarContainer } from '../organisms/Sidebar';
import PopularSubs from '../molecules/styled/PopularSubs';
import Imprint from '../molecules/styled/Imprint';
import PostsContainer from '../organisms/PostsContainer';

function FrontPage() {
  const testPost = {
    votes: 0,
    title:
      "It's Christmas 1975. I'm 5 yrs old and so glad my dad survived Vietnam. I know he'll live to be my hero for many years",
    link: 'https://i.redd.it/hvy0rz94br2a1.jpg',
    subreddit: 'therewasanattempt',
    username: 'eager_to_hear',
    timestamp: new Date('November 07, 2022 20:17:40 GMT+00:00'),
    commentCount: 2788,
  };
  return (
    <div className="front-page">
      <Header />
      <GuestSidebarMenu />
      <main>
        <PostsContainer postList={[testPost]} />
        <SidebarContainer name="posts">
          <PopularSubs />
          <Imprint />
        </SidebarContainer>
      </main>
    </div>
  );
}

export default FrontPage;
