import PropTypes from "prop-types";
import countDisplay from "../../functions/countDisplay";

function ActionText(props) {
  const { type, commentCount } = props;
  const commentCountDisplay = countDisplay(commentCount);
  switch (type) {
    case "comment":
      if (commentCount === 1) {
        return <span className="action-text">1 comment</span>;
      }
      return (
        <span className="action-text">{`${commentCountDisplay} comments`}</span>
      );
    case "share":
      return <span className="action-text">Share</span>;
    case "save":
      return <span className="action-text">Save</span>;
    case "hide":
      return <span className="action-text">Hide</span>;
    case "report":
      return <span className="action-text">Report</span>;
    default:
      return null;
  }
}

ActionText.propTypes = {
  type: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
};

export default ActionText;
