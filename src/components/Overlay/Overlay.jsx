import { useLocation } from 'react-router-dom';
import { useOverlay } from 'contexts/OverlayContext';
// components
import { SignUp } from 'components/SignUp';
import { LogIn } from 'components/LogIn';
import { RecoverUsername } from 'components/RecoverUsername';
import { ResetPassword } from 'components/ResetPassword';
import { UpdateEmail } from 'pages/Settings/UpdateEmail';
import { UpdatePassword } from 'pages/Settings/UpdatePassword';

function Overlay() {
  const settingsPage = useLocation().pathname.includes('/settings/');
  const { overlay } = useOverlay();
  return (
    <div className={`overlay${settingsPage ? ' update' : ''}`}>
      {
        {
          login: <LogIn />,
          signup: <SignUp />,
          password: <ResetPassword />,
          username: <RecoverUsername />,
          updateEmail: <UpdateEmail />,
          updatePassword: <UpdatePassword />,
        }[overlay]
      }
    </div>
  );
}

export default Overlay;
