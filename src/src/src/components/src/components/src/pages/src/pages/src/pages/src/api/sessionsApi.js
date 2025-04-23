const API = process.env.REACT_APP_API;
export async function fetchSessionsBySeries(seriesName) {
  const res = await fetch(`${API}/sessions?series=${seriesName}`);
  return res.json();
}
export async function fetchSessionDetails(sessionId) {
  const res = await fetch(`${API}/sessions/${sessionId}`);
  return res.json();
}
