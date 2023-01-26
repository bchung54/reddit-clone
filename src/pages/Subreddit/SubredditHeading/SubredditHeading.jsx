import PropTypes from 'prop-types';
import { Button } from 'components/ui/Button';
import NavBarLinks from './NavBarLinks';
import './style.css';

function SubredditHeading({ name, title, icon, color, banner, navbarLinks }) {
  return (
    <div className="subreddit-heading">
      <div
        className="banner"
        style={{
          backgroundColor: `${color}`,
          background: `url(${banner}) center center / cover no-repeat ${color}`,
        }}
      >
        <a href={`/r/${name}`}>
          <div />
        </a>
      </div>
      <div className="header">
        <div className="content">
          <img src={icon} alt="subreddit-icon" />
          <div className="title">
            <div className="text">
              <h1>{title}</h1>
              <h2>{`r/${name}`}</h2>
            </div>
            <Button className="join">Join</Button>
          </div>
        </div>
        <NavBarLinks navbarLinks={navbarLinks} />
      </div>
    </div>
  );
}

SubredditHeading.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
  navbarLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SubredditHeading;
