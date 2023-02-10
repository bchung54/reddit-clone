import PropTypes from 'prop-types';
import { SidebarContainer } from 'components/Sidebar';
import { AboutWidget } from './AboutWidget';
import { FlairsWidget } from './FlairsWidget';
import { RulesWidget } from './RulesWidget';
import { SimilarPostsWidget } from './SimilarPostsWidget';
import './style.css';

export default function WidgetSidebar({ subreddit, post }) {
  return (
    <SidebarContainer name="widgets">
      <AboutWidget
        about={subreddit.about}
        color={subreddit.color}
        dateCreated={subreddit.dateCreated}
        subscribers={subreddit.subscribers}
        online={subreddit.online}
      />
      {post ? (
        <SimilarPostsWidget />
      ) : (
        <>
          <FlairsWidget flairs={subreddit.flairs} color={subreddit.color} />
          <RulesWidget
            name={subreddit.name}
            color={subreddit.color}
            rules={subreddit.rules}
          />
        </>
      )}
    </SidebarContainer>
  );
}

WidgetSidebar.propTypes = {
  subreddit: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    color: PropTypes.string,
    bannerURL: PropTypes.string,
    about: PropTypes.string,
    dateCreated: PropTypes.string,
    subscribers: PropTypes.string,
    online: PropTypes.string,
    flairs: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        color: PropTypes.string,
      })
    ),
    rules: PropTypes.arrayOf(
      PropTypes.shape({
        heading: PropTypes.string,
        subtext: PropTypes.string,
      })
    ),
    navbarLinks: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  post: PropTypes.bool,
};

WidgetSidebar.defaultProps = {
  post: false,
};
