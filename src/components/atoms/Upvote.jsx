import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Upvote() {
  return (
    <div className="arrow-up">
      <FontAwesomeIcon className="icon" icon={["fas", "fa-arrow-up"]} />
    </div>
  );
}

export default Upvote;
