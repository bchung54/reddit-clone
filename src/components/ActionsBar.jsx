import PropTypes from "prop-types";
import Action from "./Action";

function ActionsBar({ commentCount }) {
  return (
    <div className="action-bar">
      <Action type="primary" />
      <Action type="comment" commentCount={commentCount} />
      <Action type="share" />
      <Action type="save" />
      <Action type="hide" />
      <Action type="report" />
    </div>
  );
}

ActionsBar.propTypes = {
  commentCount: PropTypes.number.isRequired,
};

export default ActionsBar;
