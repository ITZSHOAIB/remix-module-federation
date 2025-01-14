import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';

const Remote1 = React.lazy(() => import('remote1/Module'));
const Remote2 = React.lazy(() => import('remote2/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Remote1 />} />
            <Route path="remote1" element={<Remote1 />} />
            <Route path="remote2" element={<Remote2 />} />
          </Route>
        </Routes>
      </div>
    </React.Suspense>
  );
}

export default App;
