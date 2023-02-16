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

// Components
import { Header } from 'components/Header';
import { GuestSidebar } from 'components/Sidebar';

// Contexts
import { SubredditProvider } from 'contexts/SubredditContext';

// Styles
import './App.css';

// This exports the whole icon packs for Brand and Solid.
library.add(far, fas, fab);

function App() {
  return (
    <div className="App">
      <SubredditProvider>
        <Header />
        <GuestSidebar />
        <Routes>
          <Route path="/*" element={<Popular />} />
          {/* TODO: routing for homepage */}
          <Route path="/r/*">
            <Route path="home/*" element={<Home />} />
            <Route path="popular/*" element={<Popular />} />
            <Route path=":subredditName/*" element={<SubredditPage />}>
              <Route path="comments/:postId/*" element={<PostThread />} />
            </Route>
          </Route>
          {/* <Route path="*" element={<div className="notfound">Not Found</div>} /> */}
        </Routes>
      </SubredditProvider>
    </div>
  );
}

export default App;
