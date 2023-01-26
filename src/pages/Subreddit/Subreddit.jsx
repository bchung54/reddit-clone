import PropTypes from 'prop-types';
import { PostsSection } from 'components/PostsSection';
import { SidebarContainer } from 'components/Sidebar';
import { Dropdown } from 'components/ui/Dropdown';

import { defaultPosts } from 'data/defaultPosts';
import { SubredditHeading } from './SubredditHeading';

import './style.css';

function Subreddit({ subreddit }) {
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
        <SidebarContainer name="subreddit">
          <div className="about">
            <h2 style={{ backgroundColor: `${subreddit.color}` }}>
              About Community
            </h2>
            <div className="description">
              <div>{subreddit.about}</div>
              <div>{`Created ${subreddit.dateCreated}`}</div>
              <div className="stats">
                <div className="subscribers">
                  <div>{subreddit.subscribers}</div>
                  <p>Members</p>
                </div>
                <div className="online">
                  <div>{subreddit.online}</div>
                  <p>Online</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flairs">
            <h2 style={{ backgroundColor: `${subreddit.color}` }}>
              Filter by flair
            </h2>
            <div className="description">
              <div className="tags">
                {subreddit.flairs.map((flair) => {
                  return (
                    <span
                      key={flair.text}
                      style={{ backgroundColor: `${flair.color}` }}
                    >
                      {flair.text}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="rules">
            <h2
              style={{ backgroundColor: `${subreddit.color}` }}
            >{`r/${subreddit.name} Rules`}</h2>
            <div className="description">
              {subreddit.rules.map((rule, index) => {
                return (
                  <Dropdown
                    labelText={`${index + 1}. ${rule.heading}`}
                    key={rule.heading}
                  >
                    <div>{rule.subtext}</div>
                  </Dropdown>
                );
              })}
            </div>
          </div>
        </SidebarContainer>
      </div>
    </main>
  );
}

Subreddit.propTypes = {
  subreddit: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.object),
      PropTypes.arrayOf(PropTypes.string),
    ])
  ).isRequired,
};

export default Subreddit;
