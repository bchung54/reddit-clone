import { Routes, Route } from 'react-router-dom';

// Icon library
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Pages
import { Home } from 'pages/Home';
import { Popular } from 'pages/Popular';
import { Subreddit } from 'pages/Subreddit';

// Components
import { Header } from 'components/Header';
import { GuestSidebar } from 'components/Sidebar';

// Data
import { subredditList } from 'data/subredditList';

// Styles
import './App.css';

// This exports the whole icon packs for Brand and Solid.
library.add(far, fas, fab);

function App() {
  return (
    <div className="App">
      <Header />
      <GuestSidebar />
      <Routes>
        <Route index element={<Popular />} />
        <Route path="/r/home/" element={<Home />} />
        <Route path="/r/popular/*" element={<Popular />} />
        {subredditList.map((sub) => {
          return (
            <Route
              path={`/r/${sub.name}/*`}
              element={<Subreddit subreddit={sub} />}
              key={sub.name}
            />
          );
        })}
        <Route path="*" element={<div className="notfound">Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
