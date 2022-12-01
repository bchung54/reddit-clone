import { render, screen } from '@testing-library/react';
import PostListItem from '../components/PostListItem';

describe('Front Page post-classic view', () => {
  it('should render front page post(classic) correctly', () => {
    const props = {
      title:
        "It's Christmas 1975. I'm 5 yrs old and so glad my dad survived Vietnam. I know he'll live to be my hero for many years",
      link: 'https://i.redd.it/hvy0rz94br2a1.jpg',
      subreddit: 'therewasanattempt',
      username: 'eager_to_hear',
      timestamp: new Date('November 07, 2022 20:17:40 GMT+00:00'),
      commentCount: 2788,
    };
    render(
      <PostListItem
        votes={0}
        title={props.title}
        link={props.link}
        subreddit={props.subreddit}
        username={props.username}
        timestamp={props.timestamp}
        commentCount={props.commentCount}
      />
    );
    const titleElement = screen.getByText('title');
    /* const linkElement
    const subElement
    const usernameElement
    const timeAgoElement
    const commentElement */
    expect(titleElement).toBeInTheDocument();
  });
});
