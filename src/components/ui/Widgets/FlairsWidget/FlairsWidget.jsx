import PropTypes from 'prop-types';
import './style.css';

export default function FlairsWidget({ flairs, color }) {
  return (
    <div className="flairs-widget">
      <h2 style={{ backgroundColor: `${color}` }}>Filter by flair</h2>
      <div className="description">
        <div className="tags">
          {flairs.map((flair) => {
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
  );
}

FlairsWidget.propTypes = {
  flairs: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      color: PropTypes.string,
    })
  ).isRequired,
  color: PropTypes.string.isRequired,
};
