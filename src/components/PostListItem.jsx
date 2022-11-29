import VoteArrows from './VoteArrows';
import Thumbnail from './atoms/Thumbnail';
import PostBody from './PostBody';
import '../styles/postListItem.css';

function PostListItem() {
  return (
    <div className="post-list-item">
      <VoteArrows votes={2903} />
      <Thumbnail />
      <PostBody
        title="It's Christmas 1975. I'm 5 yrs old and so glad my dad survived Vietnam. I know he'll live to be my hero for many years"
        link="https://i.redd.it/hvy0rz94br2a1.jpg"
        subreddit="therewasanattempt"
        username="eager_to_hear"
        timestamp={new Date('November 07, 2022 20:17:40 GMT+00:00')}
        commentCount={2788}
      />
    </div>
  );
}

export default PostListItem;
