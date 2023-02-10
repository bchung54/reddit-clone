import PropTypes from 'prop-types';
import './style.css';

export default function AboutWidget({
  about,
  color,
  dateCreated,
  subscribers,
  online,
}) {
  return (
    <div className="about-widget">
      <h2 style={{ backgroundColor: `${color}` }}>About Community</h2>
      <div className="description">
        <div>{about}</div>
        <div>{`Created ${dateCreated}`}</div>
        <div className="stats">
          <div className="subscribers">
            <div>{subscribers}</div>
            <p>Members</p>
          </div>
          <div className="online">
            <div>{online}</div>
            <p>Online</p>
          </div>
        </div>
      </div>
    </div>
  );
}

AboutWidget.propTypes = {
  about: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  subscribers: PropTypes.string.isRequired,
  online: PropTypes.string.isRequired,
};
