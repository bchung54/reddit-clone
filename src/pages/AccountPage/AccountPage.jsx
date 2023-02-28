import PropTypes from 'prop-types';
import './style.css';

function AccountPage({ component: Element }) {
  return (
    <div className="account-page">
      <div className="art" />
      <div className="content">
        <Element />
      </div>
    </div>
  );
}

AccountPage.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default AccountPage;
