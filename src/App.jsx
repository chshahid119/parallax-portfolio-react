import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import './styles/fonts.css';

const AppLayout = lazy(() => import('./pages/AppLayout'));
const ProjectsLayout = lazy(() => import('./pages/ProjectsLayout'));
const ProjectsDetailing = lazy(() => import('./components/ProjectsDetailing'));
const NotFound = lazy(() => import('./components/NotFound'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="category/:id" element={<ProjectsLayout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
