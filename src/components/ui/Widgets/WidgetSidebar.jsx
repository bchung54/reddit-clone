import PropTypes from 'prop-types';
import { SidebarContainer } from 'components/Sidebar';
import { AboutWidget } from './AboutWidget';
import { FlairsWidget } from './FlairsWidget';
import { RulesWidget } from './RulesWidget';
import { SimilarPostsWidget } from './SimilarPostsWidget';
import './style.css';

export default function WidgetSidebar({ post }) {
  return (
    <SidebarContainer name="widgets">
      <AboutWidget />
      {post ? (
        <SimilarPostsWidget />
      ) : (
        <>
          <FlairsWidget />
          <RulesWidget />
        </>
      )}
    </SidebarContainer>
  );
}

WidgetSidebar.propTypes = {
  post: PropTypes.bool,
};

WidgetSidebar.defaultProps = {
  post: false,
};
