import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 mb-6">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">Quiz Platform</Link>
        <nav className="space-x-4">
          <Link to="/series/Silver" className="hover:underline">Silver</Link>
          <Link to="/series/Gold" className="hover:underline">Gold</Link>
          <Link to="/series/Master" className="hover:underline">Master</Link>
          <Link to="/series/King" className="hover:underline">King</Link>
        </nav>
      </div>
    </header>
  );
}
