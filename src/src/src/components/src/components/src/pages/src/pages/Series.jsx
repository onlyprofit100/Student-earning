import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuizCard from '../components/QuizCard';
import { fetchSessionsBySeries } from '../api/sessionsApi';

export default function Series() {
  const { name } = useParams();
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    fetchSessionsBySeries(name).then(setSessions);
  }, [name]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{name} Series Sessions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sessions.map(s => <QuizCard key={s.sessionId} session={s} />)}
      </div>
    </div>
  );
}
