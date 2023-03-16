import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SidebarContainer } from 'components/Sidebar';
import { Imprint } from 'components/Sidebar/Imprint';
import './style.css';
import { GiCakeSlice, GiStarFormation } from 'react-icons/gi';
import { FaChevronRight } from 'react-icons/fa';
import oneYearTrophy from 'assets/images/1_year_club.png';
import verifiedEmail from 'assets/images/verified_email.png';

function ProfileSidebar() {
  const [expand, setExpand] = useState(false);
  const { userName } = useParams();
  const handleMoreOptions = () => {
    setExpand(!expand);
  };
  return (
    <SidebarContainer name="profile">
      <div className="profile widget">
        <div className="avatar-banner" />
        <div className="avatar">
          <img
            src="https://www.redditstatic.com/desktop2x/img/avatar_over18_square.png"
            alt="avatar_over18"
          />
        </div>
        <h1>{userName}</h1>
        <Link to={`/user/${userName}/`} className="user-link">
          {`u/${userName}`} &#x2022; 1y
        </Link>
        <button className="create-avatar" type="button">
          <div style={{ width: '14px' }} />
          Create Your Own Avatar
          <FaChevronRight className="icon" />
        </button>
        <div className="intro">I like reddit</div>
        <div className="stats">
          <div className="karma-count">
            <h5>Karma</h5>
            <div className="info">
              <GiStarFormation className="icon" />
              <span className="info-text">881</span>
            </div>
          </div>
          <div className="cake-day">
            <h5>Cake day</h5>
            <div className="info">
              <GiCakeSlice className="icon" />
              <span className="info-text">January 1, 2020</span>
            </div>
          </div>
        </div>
        <button className="follow" type="button">
          Follow
        </button>
        {expand && (
          <>
            <button className="option msg-user" type="button">
              Send Message
            </button>
            <button className="option report-user" type="button">
              Report User
            </button>
          </>
        )}
        <button
          className="option expand"
          onClick={handleMoreOptions}
          type="button"
        >
          {expand ? 'Fewer Options' : 'More Options'}
        </button>
      </div>
      <div className="trophy-case widget">
        <h2>Trophy Case</h2>
        <div className="trophies">
          <div className="trophy">
            <img
              src={oneYearTrophy}
              alt="one-year trophy"
              title="One-Year Club"
            />
            <h5 style={{ display: 'inline' }}>One-Year Club</h5>
          </div>
          <div className="trophy">
            <img
              src={verifiedEmail}
              alt="verified trophy"
              title="Verified Email"
            />
            <h5 style={{ display: 'inline' }}>Verified Email</h5>
          </div>
        </div>
      </div>
      <Imprint />
    </SidebarContainer>
  );
}

export default ProfileSidebar;
