import PropTypes from 'prop-types';
import { subredditList } from 'data/subredditList';
import img from 'assets/images/sample.jpg';
import subIcon from 'assets/images/subIcons/worldnews.svg';
import './style.css';

export default function Headlines({ headlineList }) {
  return (
    <div className="headlines">
      <div className="main-heading">Trending today</div>
      <div className="content">
        {headlineList.map((headline) => {
          const subreddit = subredditList.find((sub) => {
            return sub.name === headline.subreddit;
          });
          const icon = subreddit ? subreddit.icon : subIcon;
          return (
            <div
              className="card"
              key={headline.title}
              style={{
                background: `url(${img}) center center / cover no-repeat rgb(255, 255, 255)`,
              }}
            >
              <div className="title">{headline.title}</div>
              <div className="subtitle">{headline.subtitle}</div>
              <div className="sub-info">
                <img src={icon === 'svg' ? subIcon : icon} alt="sub-icon" />
                <span>{`r/${headline.subreddit} and more`}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Headlines.propTypes = {
  headlineList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
};
