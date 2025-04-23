import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSessionDetails } from '../api/sessionsApi';

export default function Join() {
  const { sessionId } = useParams();
  const [session, setSession] = useState(null);
  useEffect(() => {
    fetchSessionDetails(sessionId).then(setSession);
  }, [sessionId]);

  if (!session) return <p>Loading...</p>;
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Join Session</h2>
      <p>Series: {session.seriesName}</p>
      <p>Start Time: {new Date(session.startTime).toLocaleString()}</p>
      <button className="mt-4 p-2 bg-green-500 text-white rounded-lg">Enter Quiz</button>
    </div>
  );
}

