import React from 'react';
import { Link } from 'react-router-dom';
export default function QuizCard({ session }) {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <h3 className="font-bold">Session at {new Date(session.startTime).toLocaleTimeString()}</h3>
      <p>Series: {session.seriesName}</p>
      <Link to={`/join/${session.sessionId}`} className="mt-2 inline-block p-2 bg-blue-500 text-white rounded-lg">Join</Link>
    </div>
  );
}
