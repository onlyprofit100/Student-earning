import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Series from './pages/Series';
import Join from './pages/Join';

export default function App() {
  return (
    <Router>
      <Header />
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series/:name" element={<Series />} />
          <Route path="/join/:sessionId" element={<Join />} />
        </Routes>
      </main>
    </Router>
  );
}
