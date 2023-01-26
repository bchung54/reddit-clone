import PropTypes from 'prop-types';
import img from 'assets/images/sample.jpg';
import './style.css';

function Headlines({ headlineList }) {
  return (
    <div className="headlines">
      <div className="main-heading">Trending today</div>
      <div className="content">
        {headlineList.map((headline) => {
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
                <span className="sub-icon">icon</span>
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

export default Headlines;
