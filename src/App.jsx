import { Routes, Route } from 'react-router-dom';

// Icon library
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Pages
import { Home } from 'pages/Home';
import { Popular } from 'pages/Popular';
import { SubredditPage } from 'pages/Subreddit';
import { PostThread } from 'pages/PostThread';
import { Settings } from 'pages/Settings';

// Components
import { Header } from 'components/Header';
import { MainSidebar } from 'components/Sidebar';
import { PrivateRoute } from 'components/PrivateRoute';
// import { Login } from 'components/Login';

// Contexts
import { AuthProvider } from 'contexts/AuthContext';
import { SubredditProvider } from 'contexts/SubredditContext';

// Styles
import './App.css';
import { AccountPage } from 'pages/AccountPage';
import { SignUp } from 'components/SignUp';
import { LogIn } from 'components/LogIn';
import { RecoverUsername } from 'components/RecoverUsername';
import ResetPassword from 'components/ResetPassword/ResetPassword';
import { AnonymousRoute } from 'components/AnonymousRoute';

// This exports the whole icon packs for Brand and Solid.
library.add(far, fas, fab);

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <SubredditProvider>
          <Routes>
            <Route
              path="*"
              element={
                <>
                  <Header />
                  <MainSidebar />
                  <Routes>
                    <Route path="/*" element={<Popular />} />
                    <Route path="/r/*">
                      <Route path="home/*" element={<Home />} />
                      <Route path="popular/*" element={<Popular />} />
                      <Route
                        path=":subredditName/*"
                        element={<SubredditPage />}
                      >
                        <Route
                          path="comments/:postId/*"
                          element={<PostThread />}
                        />
                      </Route>
                    </Route>
                    <Route
                      path="/settings/"
                      element={<PrivateRoute element={<Settings />} />}
                    />
                  </Routes>
                </>
              }
            />
            <Route path="/account/*" element={<AnonymousRoute />}>
              <Route path="login" element={<AccountPage component={LogIn} />} />
              <Route
                path="signup"
                element={<AccountPage component={SignUp} />}
              />
              <Route
                path="password"
                element={<AccountPage component={ResetPassword} />}
              />
              <Route
                path="username"
                element={<AccountPage component={RecoverUsername} />}
              />
            </Route>
          </Routes>
        </SubredditProvider>
      </AuthProvider>
    </div>
  );
}
